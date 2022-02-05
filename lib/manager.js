const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email,officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;   
  }

  getRole(){
      return 'Manager';
  }

}

///const AdmManager = new Manager('Matias Glz','D2785863','mateo@criptosedena.com','5537335843');
  
//ItManager.printInfo();
//const idAdmManager = AdmManager.getId();
//console.log('id idAdmManager',idAdmManager);
//console.log('rol',AdmManager.getRole());

module.exports = Manager;