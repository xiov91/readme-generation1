// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'motivation',
        message: "What was your motivation behind this project?",
    },
    {
        type: 'input',
        name: 'problem',
        message: "What problem does it solve?"
    },
    {
        type: 'input',
        name: 'lesson',
        message: "What did you learn?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
