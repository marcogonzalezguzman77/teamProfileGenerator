const Engineer = require('../lib/engineer');
 
describe('Engineer', () => {

  it('should return a Engineer name, id, email, git username and ocupattion', () => {
    
    const AdmEngineer = new Engineer('Bruno Glz','D2785864','bruno@criptosedena.com','bruno@git');

    expect(AdmEngineer.getName()).toEqual('Bruno Glz');
    expect(AdmEngineer.getId()).toEqual('D2785864');
    expect(AdmEngineer.getEmail()).toEqual('bruno@criptosedena.com');
    expect(AdmEngineer.getGitHub()).toEqual('bruno@git');
    expect(AdmEngineer.getRole()).toEqual('Engineer');    

  });

 
});
