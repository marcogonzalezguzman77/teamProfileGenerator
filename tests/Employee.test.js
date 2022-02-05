const Employee = require('../lib/employee');
 
describe('Employee', () => {
    it('should return a employee name, id, email and ocupattion', () => {
            
            const ItManager = new Employee('Marco Glz','c2785863','marco@criptosedena.com');  

            expect(ItManager.getName()).toEqual('Marco Glz');
            expect(ItManager.getId()).toEqual('c2785863');
            expect(ItManager.getEmail()).toEqual('marco@criptosedena.com');
            expect(ItManager.getRole()).toEqual('Employee');    

    });
    
});
