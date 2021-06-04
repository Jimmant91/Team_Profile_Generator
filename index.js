// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// Prompt questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for use of the project?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What are the GitHub usernames of the fellow contributors, if any?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license was used for this project, if any?',
        choices: ["Apache", "Artistic", "Boost", "BSD 3", "BSD 2", "Eclipse", "IBM", "ISC", "MIT", "Mozilla", "Perl", "SIL", "Unlicense", "WTFPL", "Zlib", "None"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'filename',
        message: 'Please provide a file name.',
    },
];