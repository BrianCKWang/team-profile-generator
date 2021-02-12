const Employee = require('./Employee');

class Basic extends Employee{
  constructor(name = '', id = '', email = ''){
    super(name, id, email);
  }
}

class Manager extends Employee{
  constructor(name = '', id = '', email = '', officeNum = ''){
    super(name, id, email);
    this.officeNum = officeNum;
  }
}

class Engineer extends Employee{
  constructor(name = '', id = '', email = '', github = ''){
    super(name, id, email);
    this.github = github;
  }

  getGithubFullAddress() {
    return 'https://github.com/' + this.github;
  }
}

class Intern extends Employee{
  constructor(name = '', id = '', email = '', school = ''){
    super(name, id, email);
    this.school = school;
  }
}

module.exports = {
  Basic, 
  Manager, 
  Engineer, 
  Intern
};