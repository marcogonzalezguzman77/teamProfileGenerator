const Manager = require('../lib/manager');
 
describe('Manager', () => {

  it('should return a Manager name, id, email, office number and ocupattion', () => {
    
    const AdmManager = new Manager('Matias Glz','D2785863','mateo@criptosedena.com','5537335843');

    expect(AdmManager.getName()).toEqual('Matias Glz');
    expect(AdmManager.getId()).toEqual('D2785863');
    expect(AdmManager.getEmail()).toEqual('mateo@criptosedena.com');
    expect(AdmManager.officeNumber).toEqual('5537335843');
    expect(AdmManager.getRole()).toEqual('Manager');    

  });

 
});
