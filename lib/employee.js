class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }  
      
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Id: ${this.id}`);
      console.log(`Email: ${this.email}`);
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee'
    }

  }
  
  //const ItManager = new Employee('Marco Glz','c2785863','marco@criptosedena.com');
  
  //ItManager.printInfo();
  //const idItManager = ItManager.getId();
  //console.log('id idItMaganer',idItManager);

  module.exports = Employee;
