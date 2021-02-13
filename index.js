const Role = require('./lib/object/Role');
const inquirer = require('inquirer');
const questions = require('./lib/inquirer/questions');
const generateMarkdown = require('./lib/generateMarkdown');

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
          let engineer = new Role.Engineer();
          propertyList = Object.keys(engineer);
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
          let intern = new Role.Intern();
          propertyList = Object.keys(intern);
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
  let manager = new Role.Manager();
  let propertyList = Object.keys(manager);
  promptManagerDetails(manager, propertyList)
  .then(employeeList => {
    return promptEmployeeDetails(employeeList);
  })
  .then(employeeList => {
    console.log("Creating html...");
    return generateMarkdown(employeeList);
  })
  .then(markdownData => {
    console.log("Saving file...");
    console.log(markdownData);
    // return writeToFile('./dist/README.md', markdownData);
  })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse.message);
  // })
  .catch(err => {
    console.log(err);
  });
}

main();