const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email,github) {
    super(name, id, email);
    this.github = github;   
  }

  getGitHub(){
      return this.github;
  }

  getRole(){
      return 'Engineer';
  }

}

/*const AdmEngineer = new Engineer('Bruno Glz','D2785864','bruno@criptosedena.com','bruno@git');
  
//ItManager.printInfo();
const idAdmEngineer = AdmEngineer.getId();
console.log('id AdmEngineer',idAdmEngineer);
console.log('rol',AdmEngineer.getRole());
console.log('git',AdmEngineer.getGitHub());
*/

module.exports = Engineer;