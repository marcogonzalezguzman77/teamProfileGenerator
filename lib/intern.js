const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email,school) {
    super(name, id, email);
    this.school = school;   
  }

  getSchool(){
      return this.school;
  }

  getRole(){
      return 'Intern';
  }

}

/*
const AdmIntern = new Intern('Gael Glz','D2785865','gael@criptosedena.com','Oxford');
  
//ItManager.printInfo();
const idAdmIntern = AdmIntern.getId();
console.log('id AdmIntern',idAdmIntern);
console.log('rol',AdmIntern.getRole());
console.log('school',AdmIntern.getSchool());
*/ 

module.exports = Intern;