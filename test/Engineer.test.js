const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

const Employee = require('../lib/Employee');

describe('Engineer Class', () => {
  describe('Initialization', () => {
    it("The instantiated Employee class should be type of object", () => {
      const employee = new Employee();
      expect(typeof(employee)).toBe("object");
    });
    it("Can set name through cosntructor parameters", () => {
      const name = "Shawn Keller";
      const employee = new Employee(name);
      expect(employee.name).toBe(name);
    });
    it("Can set id through constructor parameters", () => {
      const id = 12;
      const employee = new Employee("Shawn Keller",id);
      expect(employee.id).toBe(id);
    });
    it("Can set email through constructor parameters", () => {
      const email = "sk@mail.com";
      const employee = new Employee("Shawn Keller", 12, email);
      expect(employee.email).toBe(email);
    });
  });
  describe('Employee Methods', () => {
    it("Should return employee name", () => {
      const name = "Shawn Keller";
      const employee = new Employee(name);
      expect(employee.getName()).toBe(name);
    });
    it("Should return employee id", () => {
      const id = 12;
      const employee = new Employee("Shawn Keller",id);
      expect(employee.getId()).toBe(id);
    });
    it("Should return employee email", () => {
      const email = "sk@mail.com";
      const employee = new Employee("Shawn Keller", 12, email);
      expect(employee.getEmail()).toBe(email);
    });
    it("Should return 'Employee' as rold", () => {
      const employee = new Employee("Shawn Keller", 12, "sk@mail.com");
      expect(employee.getRole()).toBe("Employee");
    });
  });
});
