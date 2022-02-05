const Intern = require('../lib/intern');
 
describe('Intern', () => {

  it('should return a Intern name, id, email, school and ocupattion', () => {
    
    const AdmIntern = new Intern('Gael Glz','D2785865','gael@criptosedena.com','Oxford');

    expect(AdmIntern.getName()).toEqual('Gael Glz');
    expect(AdmIntern.getId()).toEqual('D2785865');
    expect(AdmIntern.getEmail()).toEqual('gael@criptosedena.com');
    expect(AdmIntern.getSchool()).toEqual('Oxford');
    expect(AdmIntern.getRole()).toEqual('Intern');    

  });

 
});
