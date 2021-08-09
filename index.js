// TODO: Include packages needed for this application (DONE)
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input (DONE)
const questions = [
  // project title 
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of project?',
  },
  // project description
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of the application:',
  },
  // project license 
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for the application:',
    choices: ['Apache 2.0 License', 'The MIT License', 'Mozilla Public License 2.0'],
  },
  // developer github username
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  // developer email address
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  // application requirements
  {
    type: 'input',
    name: 'requirements',
    message: 'Please describe any requirements for installing the application:',
  },
  // installation repo URL
  {
    type: 'input',
    name: 'repoURL',
    message: 'What is the URL of the GitHub repository for the project?',
  },
  // installation location
  {
    type: 'input',
    name: 'installLoc',
    message: 'Where should the user run installation commands?',
  },
  // installation command
  {
    type: 'input',
    name: 'installCmd',
    message: 'What command should the user run to install the application?',
  },
  // usage launch location
  {
    type: 'input',
    name: 'launchLoc',
    message: 'Where should the user launch the application?'
  },
  // usage launch command
  {
    type: 'input',
    name: 'launchCmd',
    message: 'What command should the user run to launch the application?',
  },
  // usage user actions
  {
    type: 'input',
    name: 'userActions',
    message: 'What actions should the user take to successfully run the application?',
  },
  // usage user expectations
  {
    type: 'input',
    name: 'userExpectations',
    message: 'What should the user expect when the application has finished running?',
  },
  // tests
  {
    type: 'input',
    name: 'tests',
    message: 'Please describe any unit tests that can be run to make sure the application is functioning as expected:',
  },
];

// TODO: Create a function to write README file (SKIPPED)
// function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app (DONE)
function init() {
  inquirer.prompt(questions)
  .then((data) => {
    console.log("In then block!");
    console.log("Here's the data", data);
    
    console.log("We've imported:", generate.generateMarkdown);
    const markdownContent = generate.generateMarkdown(data);
    console.log(markdownContent);

    fs.writeFile('./output/README.md', markdownContent, (err) =>
    err ? console.log(err) : console.log('Successfully wrote README file')
    );
    
  });
};

// Function call to initialize app
init();