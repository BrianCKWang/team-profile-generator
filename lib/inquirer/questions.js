const employeeTypeQuestions = [
  {
    type: 'list',
    name: 'type',
    message: "Choose a type of employee to add",
    choices: ['Engineer', 'Intern', 'Exit'],
    default: 'Exit'
  }
];


const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter manager's name",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter manager's name!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "Please enter manager's id",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter manager's id!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter manager's email",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter manager's email!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNum',
    message: "Please enter manager's office number",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter manager's office number!");
        return false;
      }
    }
  }
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter engineer's name",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter engineer's name!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "Please enter engineer's id",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter engineer's id!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter engineer's email",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter engineer's email!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: "Please enter engineer's github username",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter engineer's github username!");
        return false;
      }
    }
  }
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "Please enter intern's name",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter intern's name!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "Please enter intern's id",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter intern's id!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Please enter intern's email",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter intern's email!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'school',
    message: "Please enter intern's school name",
    validate: input => {
      if(input){
        return true;
      }
      else{
        console.log("Please enter intern's school name!");
        return false;
      }
    }
  }
];


module.exports = {
  employeeTypeQuestions,
  managerQuestions,
  engineerQuestions,
  internQuestions
}