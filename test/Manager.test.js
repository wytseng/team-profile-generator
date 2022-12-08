const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager Class', () => {
  describe('Initialization', () => {
    it("Can set office number through cosntructor parameters", () => {
      const officeNum = 2;
      const manager = new Manager("David Kim", 12, "dk@mail.com", officeNum);
      expect(manager.officeNumber).toBe(officeNum);
    });
  });
  describe('Manager Methods', () => {
    it("Should return 'Manager' as role", () => {
      const manager = new Manager("David Kim", 12, "dk@mail.com", 2);
      expect(manager.getRole()).toBe("Manager");
    });
    it("Should return the office number", () => {
      const officeNum = 2;
      const manager = new Manager("David Kim", 12, "dk@mail.com", officeNum);
      expect(manager.getOfficeNumber()).toBe(officeNum);
    })
  });
});
