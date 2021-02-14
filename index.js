const Manager = require('./lib/object/Manager');
const Engineer = require('./lib/object/Engineer');
const Intern = require('./lib/object/Intern');
const inquirer = require('inquirer');
const generateContent = require('./utils/generateContent');
const { writeFile, copyFile } = require('./utils/file-handlers')

const idSet = new Set();

const promptManagerDetails = (manager, propertyList) => {
  
  console.log("");
  console.log("Please enter manager details: ");
  return promptFor(manager, propertyList)
        .then( managerDetail => {
          let employeeList = {};
          employeeList.manager = [];
          employeeList.manager.push(managerDetail);
          return employeeList;
        })
        .catch(err => {
          console.log(err);
        });
}

const promptEmployeeTypeOrFinish = () => {
  console.log("");
  return inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: "Choose a type of employee to add",
      choices: ['Engineer', 'Intern', 'Finish'],
      default: 'Finish'
    }
  ]);
};

const promptFor = (employeeType, propertyList) => {
  return promptDetails(employeeType, propertyList)
  .then(employeeType =>{
    return Promise.resolve(employeeType);
  })
  .catch(err => {
    console.log(err);
  });
}

const promptDetails = (employeeType, propertyList) => {
  
  if(propertyList.length > 0){
    const propertyName = propertyList.shift();

    return inquirer.prompt([
      {
        type: 'input',
        name: propertyName,
        message: "Please enter " + propertyName + ": ",
        validate: input => {
          
          if(input){
            if(propertyName == 'id'){
              if(idSet.has(input)){
                console.log(" -> id '" + input + "' already exists in system, please enter a unique id!");
                return false;
              }
            }
            return true;
          }
          else{
            console.log("Please enter " + propertyName + "!");
            return false;
          }
        }
      }
    ])
    .then(ans => {
      employeeType[propertyName] = ans[propertyName];
      if(propertyName == 'id'){
        idSet.add(ans[propertyName]);
      }
      
      return promptDetails(employeeType, propertyList);
    })
  }
  else{
    return Promise.resolve(employeeType);
  }
};

const promptEmployeeDetails = EmployeeList => {
  let propertyList;
  if(!EmployeeList.engineerList){
    EmployeeList.engineerList = [];
  }

  if(!EmployeeList.internList){
    EmployeeList.internList = [];
  }

  return promptEmployeeTypeOrFinish()
    .then( choice => {
      switch(choice.type){
        case 'Engineer':
          let engineer = new Engineer();
          propertyList = Object.keys(engineer).filter(word => {
            return !word.startsWith('get');
          });
          console.log("");
          console.log("Please enter engineer details: ");
          return promptFor(engineer, propertyList)
                .then(employee => {
                  EmployeeList.engineerList.push(employee);
                  return EmployeeList;
                })
                .then(EmployeeList => {
                  return promptEmployeeDetails(EmployeeList);
                })
                .catch(err => {
                  console.log(err);
                });
        case 'Intern':
          let intern = new Intern();
          propertyList = Object.keys(intern).filter(word => {
            return !word.startsWith('get');
          });
          console.log("");
          console.log("Please enter intern details: ");
          return promptFor(intern, propertyList)
                .then(employee => {
                  EmployeeList.internList.push(employee);
                  return EmployeeList;
                })
                .then(EmployeeList => {
                  return promptEmployeeDetails(EmployeeList);
                })
                .catch(err => {
                  console.log(err);
                });
        default:
          return EmployeeList;
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function main(){
  let manager = new Manager();
  let propertyList = Object.keys(manager).filter(word => {
    return !word.startsWith('get');
  });
  promptManagerDetails(manager, propertyList)
  .then(employeeList => {
    return promptEmployeeDetails(employeeList);
  })
  .then(employeeList => {
    // console.log(employeeList);
    console.log("");
    console.log("Generting content...");
    return generateContent(employeeList);
  })
  .then(contentData => {
    console.log("Saving file...");
    return writeFile('./dist/index.html', contentData);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse.message);
  })
  .then(() => {
    console.log("Copying file...");
    return copyFile('./src/style.css', './dist/style.css');
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse.message);
  })
  .catch(err => {
    console.log(err);
  });
}

main();