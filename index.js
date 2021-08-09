// TODO: Include packages needed for this application (DONE)
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input (IN PROGRESS)
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app (IN PROGRESS)
function init() {
  inquirer.prompt(questions)
  .then((data) => {
    console.log("In then block!");
    console.log("Here's the data", data);
    console.log("We've imported:", generate.generateMarkdown);
    const markdownContent = generate.generateMarkdown(data);
    console.log(markdownContent);
  });
};

// Function call to initialize app
init();