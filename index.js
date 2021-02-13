const Role = require('./lib/object/Role');
const inquirer = require('inquirer');
const questions = require('./lib/inquirer/questions');
const generateMarkdown = require('./lib/generateMarkdown');

const promptManagerDetails = () => {
  return inquirer.prompt(questions.managerQuestions)
                .then( managerDetail => {
                  let employeeList = {};
                  employeeList.manager = [];
                  employeeList.manager.push(managerDetail);
                  return employeeList;
                });
}

const promptEmployeeTypeOrFinish = () => {
  return inquirer.prompt(questions.employeeTypeQuestions);
}

const promptEngineerDetails = () => {
  return inquirer.prompt(questions.engineerQuestions);
}

const promptInternDetails = () => {
  return inquirer.prompt(questions.internQuestions);
}

const promptEmployeeDetails = EmployeeList => {
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
          return promptEngineerDetails()
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
          return promptInternDetails()
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
          break;
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function main(){
  promptManagerDetails()
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