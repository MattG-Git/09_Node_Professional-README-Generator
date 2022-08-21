// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What would you like your poject to be titled?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Describe your project'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'What command will install your dependencies?'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How is this application used?'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'How can someone contribute?'
    },
    {
        name: 'test',
        type: 'input',
        message: 'Using commands, how do you test your application?'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Which license would you like your project to have?',
        choices: ['Apache license 2.0','MIT', 'IPL 1.0', 'MPL 2.0']
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
