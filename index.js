const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const generatePage = require('./src/generate');

const teamMembers = {
  manager: '',
  engineers: [],
  interns: []
}; 
const storedId = [];

const generatePrompt = (role) => {
  const questions = [
    {
      type: "input",
      message: `What is the ${role}'s name?`,
      name: 'name',
      validate: (name) => {
        if (name.trim() !== '') {
          return true;
        }
        return "Name cannot be empty.";
      }
    },
    {
      type: "input",
      message: `What is the ${role}'s employee ID?`,
      name: 'id',
      validate: (id) => {
        if (id.trim() === '') {
          return "Employee ID cannot be empty.";
        }
        if (Number.isInteger(Number(id))) {
          if (Number(id) > 0) {
            if (!storedId.includes(id.trim())) {
              return true;
            }
            return "This employee ID already exists in out record.";
          }
          return "Employee ID has to be a positive integer.";
        }
        return "Employee ID has to be an integer.";
      }
    },
    {
      type: "input",
      message: `What is the ${role}'s email?`,
      name: 'email',
      validate: (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true;
        }
        return "Not a valid email address. Try Again.";
      }
    }
  ];

  switch(role) {
    case 'Manager':
      questions.push(
        {
          type: "input",
          message: "What is the team manager's office number?",
          name: 'officeNum',
          validate: (officeNum) => {
            if (officeNum.trim() === '') {
              return "Office Numver cannot be empty.";
            }
            if (Number.isInteger(Number(officeNum))) {
              if (Number(officeNum) > 0) {
                return true;
              }
              return "Office number has to be a positive integer.";
            }
            return "Office number has to be an integer.";
          }
        }
      );
      break;
    case 'Engineer': 
      questions.push(
        {
          type: "input",
          message: "What is your Github username?",
          name: 'github',
          validate: (github) => {
            if (/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(github)) {
              return true;
            }
            return "Invalid Github username. Try Again."
          }
        }
      );
      break;
    case 'Intern': 
      questions.push(
        {
          type: "input",
          message: "What school are you attending?",
          name: 'school',
          validate: (school) => {
            if (school.trim() !== '') {
              return true;
            }
            return "School name cannot be empty.";
          }
        }
      );
      break;
  }
  return questions;
}

function app() {
  function createManager() {
    console.log(chalk.gray("------------------"));
    console.log(chalk.blueBright.bold("Welcome to the Team Generator! \nEnter your team member information and we will generate a page with your team's about for you!"));
    console.log(chalk.gray("------------------"));
    console.log(chalk.magenta("First, we need information on the team manager."));
    inquirer
      .prompt(generatePrompt('Manager'))
      .then(({name, id, email, officeNum}) => {
        const manager = new Manager(name.trim(), id.trim(), email.trim(), officeNum.trim());
        teamMembers.manager = manager;
        storedId.push(id);
        console.log(teamMembers.manager.officeNumber);
        console.log(chalk.magenta(`Team manager - ${manager.name} - added to record!`));
        console.log(chalk.gray("------------------"));
        addMembers();
      }) 
  }
  function addMembers() {
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'Would you like to add more team members?',
          name: 'action',
          choices: [
            "Add an Engineer",
            "Add an Intern",
            "Finish building my team"
          ]
        }
      ])
      .then(({action}) => {
          switch(action) {
            case 'Add an Engineer':
              addEngineer();
              break;
            case 'Add an Intern':
              addIntern();
              break;
            case 'Finish building my team':
              renderPage();
              break;
          }
      })
  }

  function addEngineer() {
    console.log(chalk.gray('------------------'));
    console.log(chalk.magenta('Adding an Engineer to the team'));
    inquirer
      .prompt(generatePrompt('Engineer'))
      .then(({name, id, email, github}) => {
        const engineer = new Engineer(name.trim(), id.trim(), email.trim(), github.trim());
        teamMembers.engineers.push(engineer);
        storedId.push(id);
        console.log(teamMembers.engineers[0].github);
        console.log(chalk.magenta(`Engineer - ${engineer.name} - added to record!`));
        console.log(chalk.gray("------------------"));
        addMembers();
      }) 
  }

  function addIntern() {
    console.log(chalk.gray('------------------'));
    console.log(chalk.magenta('Adding an Intern to the team'));
    inquirer
      .prompt(generatePrompt('Intern'))
      .then(({name, id, email, school}) => {
        const intern = new Intern(name.trim(), id.trim(), email.trim(), school.trim());
        teamMembers.interns.push(intern);
        storedId.push(id);
        console.log(teamMembers.interns[0].school);
        console.log(chalk.magenta(`Intern - ${intern.name} - added to record!`));
        console.log(chalk.gray("------------------"));
        addMembers();
      }) 
  }

  function renderPage() {
    fs.writeFile(path.join('dist', 'team.html'), generatePage(teamMembers), 'utf8', (err) => {
      err ? console.error(err) : console.log(chalk.blueBright.bold("'About Team' page is generated!"))
    });
  }
  createManager();
}


app()
