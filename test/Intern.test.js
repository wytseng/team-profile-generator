const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern Class', () => {
  describe('Initialization', () => {
    it("Can set school through constructor parameters", () => {
      const school = "UCI";
      const intern = new Intern("Alex Wonder", 7, "awonder@mail.com", school);
      expect(intern.school).toBe(school);
    });
  });
  describe('Intern Methods', () => {
    it("Should return school intern is from", () => {
      const school = "UCI";
      const intern = new Intern("Alex Wonder", 7, "awonder@mail.com", school);
      expect(intern.getSchool()).toBe(school);
    });
    it("Should return 'Engineer' as role", () => {
      const intern = new Intern("Alex Wonder", 7, "awonder@mail.com", "UCI");
      expect(intern.getRole()).toBe("Intern");
    });
  });
});