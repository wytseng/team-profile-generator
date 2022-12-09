# About Team Page Generator

## Description 

This application is a command line application prompts the user for information on each and every team member, then proceeds to generate an "About Team" page that displays each team member's name, role, id, email. Depending on the role of the member, it may also display office number, github usersame, or the school an intern goes to. 

## Table of Contents 

* [Installation](#installation) 

* [Usage](#Usage) 

* [License](#license) 

* [Contribution](#contribution) 

* [Tests](#tests) 

* [Questions](#questions) 

## Installation 

To install necessary dependencies, run the following command: 

``` 
npm i 
``` 
This application specifically uses inquirer@8.2.4 and the newest version of jest(@29.3.1).

## Usage 

This application is free to use by anyone. 

To start off, run ```npm i``` in your command line to make sure all dependencies are installed. Then run ```node index.js``` to start the application. Alternatively, you can also start the application with ```npm start```.

The terminal/command line tool will then prompt you to answer multiple questions. Most question will ask for a text input with information regarding your team members. Be aware that all these field will check if your response is a validated response, and will notify you why if not validated. The application will not proceed to the next question until a valid input is entered. 

Once all information on each employee is entered, the application will then ask whether you would like to add another team member (engineer or intern) or finish entering. Once you finish, the terminal will then notify you whether a file has been successfully generated. The generated file will be at ```./dist/team.html```. 

If at any point you would like to terminate the application, simply use ```ctrl + C```.

For a more detailed walkthrough, refer to this video: https://drive.google.com/file/d/1oQi_9HM7Iuvv03XxV3JTGQYWRnzJ1Kqa/view?usp=sharing.  

## License 

N/A 

## Contribution

If you would like to contribute to this application, please reach out to the owner via email first. You can find the owner's email listed under the 'Questions' section below.  

## Tests 

To run test, run the followng command: 

``` 
npm test
``` 
All tests should pass.

## Questions 
If you have any questions about the repo, open an issue or contact me directly at stephanietseng113@gmail.com. 
You can find more of my work at [wytseng](https://github.com/wytseng).