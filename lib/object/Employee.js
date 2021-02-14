class Employee {
  constructor(name = '', id = '', email = ''){
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName = function () {
    return this.name;
  }

  getID = function () {
    return this.id;
  }

  getEmail = function () {
    return this.email;
  }

  getRole = function () {
    return 'Employee';
  }
}

module.exports = Employee;