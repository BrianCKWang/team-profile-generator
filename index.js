const Role = require('./lib/object/Role');
const inquirer = require('inquirer');
const questions = require('./lib/inquirer/questions');
const generateMarkdown = require('./lib/generateMarkdown');

const promptManagerDetails = () => {
  return inquirer.prompt(questions.managerQuestions);
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
  return promptEmployeeTypeOrFinish()
    .then( choice => {
      switch(choice.type){
        case 'Engineer':
          return promptEngineerDetails()
                .then(employee => {
                  if(!EmployeeList.engineerList){
                    EmployeeList.engineerList = [];
                  }
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
                  if(!EmployeeList.internList){
                    EmployeeList.internList = [];
                  }
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
          break;
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function main(){
  promptManagerDetails()
  .then( managerDetail => {
    let EmployeeList = {};
    EmployeeList.manager = [];
    EmployeeList.manager.push(managerDetail);
    return EmployeeList;
  })
  .then(promptEmployeeDetails)
  .then(portfolioData => {
    console.log("Creating html...");
    return generateMarkdown(portfolioData);
  })
  // .then(markdownData => {
  //   console.log("Saving file...");
  //   return writeToFile('./dist/README.md', markdownData);
  // })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse.message);
  // })
  .catch(err => {
    console.log(err);
  });
}

main();