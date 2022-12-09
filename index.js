const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
const { off } = require('process');

const teamMembers = []; 


const generatePrompt = (role) => {
  const questions = [
    {
      type: "input",
      message: "What is the team manager's name?",
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
      message: "What is the team manager's employee ID?",
      name: 'id',
      validate: (id) => {
        if (id.trim() === '') {
          return "Employee ID cannot be empty.";
        }
        if (Number.isInteger(Number(id))) {
          if (Number(id) > 0) {
            return true;
          }
          return "Employe ID has to be a positive integer.";
        }
        return "Employee ID has to be an integer.";
      }
    },
    {
      type: "input",
      message: "What is the team manager's email?",
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
  }
  return questions;
}

function app() {
  function createManager() {
    console.log("Welcome to the Team Generator! \nEnter your team member information and we will generate a page with your team's about for you!");
    inquirer
      .prompt(generatePrompt('Manager'))
      .then(({name, id, email, officeNum}) => {
        const manager = new Manager(name, id, email, officeNum);
        teamMembers.push(manager);
        console.log(manager);
        addMembers();
      }) 
  }
  function addMembers() {
    inquirer
      .prompt([
        {
          type: 'list',
          message: 'Would you like to add a team member?',
          name: 'action',
          choices: [
            "Add an Engineer",
            "Add an Intern",
            "Finish building my team"
          ]
        }
      ])
      .then((response) => {
          switch(response) {
            case 'Add an Engineer':
              addEngineer();
            case 'Add an Intern':
              addIntern();
            case 'Finish building my team':
              renderPage();
          }
      })
  }

  function addEngineer() {
    console.log('add an engineer');
  }

  function addIntern() {
    console.log('add an intern');
  }

  function renderPage() {
    console.log('render page');
  }

  createManager();
}


app()
