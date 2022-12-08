const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
  describe('Initialization', () => {
    it("Can set github through constructor parameters", () => {
      const github = "paulc";
      const engineer = new Engineer("Paul Codes", 43, "paulc@mail.com", github);
      expect(engineer.github).toBe(github);
    });
  });
  describe('Engineer Methods', () => {
    it("Should return engineer github username", () => {
      const github = "paulc";
      const engineer = new Engineer("Paul Codes", 43, "paulc@mail.com", github);
      expect(engineer.getGithub()).toBe(github);
    });
    it("Should return 'Engineer' as role", () => {
      const engineer = new Engineer("Paul Codes", 43, "paulc@mail.com", "paulc");
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
