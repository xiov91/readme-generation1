// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (value) => { if (value) { return true } else { return "This answer is required!" } }
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
        validate: (value) => { if (value) { return true } else { return "This answer is required!" } }
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return "This answer is required!" } }
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return "This answer is required!" } }
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well. ',
        name: 'credits',
        validate: (value) => { if (value) { return true } else { return "This answer is required!" } }
    },
    {
        type: 'list',
        message: 'Please input your license type.',
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
        validate: (value) => { if (value) { return true } else { return "This answer is required!" } }
    },
    {
        type: 'input',
        message: 'Include guidelines for how other users can contribute!',
        name: 'contributions',
        validate: (value) => { if (value) { return true } else { return "This answer is required!" } }
    },
    {
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        name: 'tests',
        validate: (value) => { if (value) { return true } else { return "This answer is required!" } }
    },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'gitname',
        validate: (value) => { if (value) { return true } else { return "This answer is required!" } }
    },
    {
        type: 'input',
        message: 'Enter your email, in case users have additional questions.',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return "This answer is required!" } }
    }
    ];

// TODO: Create a function to write README file
function writeToFile(data) {
    return generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([...questions]).then((answers) => {
        console.log('Answers', answers);
        var fileInfo = writeToFile(answers);
        fs.writeFile("README.md", fileInfo, (err => {
            if (err) {
                console.log(err)
            }
        })

        );
     });
};

// Function call to initialize app
init();
