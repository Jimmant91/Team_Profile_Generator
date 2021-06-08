// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Empty list to push team members to
const team = [];

// Questions for adding more members or ending 
const moreQuestions = [
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "add",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add anymore team members"
        ]
    }
];

function manager() {
    inquirer
        // Ask manager questions
        .prompt(require("./src/managerQuestions"))
        // Take the response and create a new manager
        .then( (response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            // Add manager object to team list
            team.push(manager);
            // Run moreQuestions function to ask if more members should be added
            addMore();
        });
}

function engineer() {
    inquirer
        .prompt(require("./src/engineerQuestions"))
        .then( (response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            // Add engineer object to team list
            team.push(engineer);
            // Run moreQuestions function to ask if more members should be added
            addMore();
        });
}

function intern() {
    inquirer
        .prompt(require("./src/internQuestions"))
        .then( (response) => {
            const intern = new Intern(response.name, response.id, response.email, response.university);
            // Add intern object to team list
            team.push(intern);
            // Run moreQuestions function to ask if more members should be added
            addMore();
        });
}

function addMore() {
    inquirer
        .prompt(moreQuestions)
        .then( (response) => {
            switch (response.add) {
                case "Engineer":
                    engineer();
                    break;
                case "Intern":
                    intern();
                    break;
                default:
                    console.log("Thank you, your team HTML file has been generated.");
                    // If done, write to file with info provided
                    // Call the generateTeam function to create the HTML
                    fs.writeFileSync("./dist/index.html", generateTeam(team));
            }
        });
}

function init() {
    // Welcome message
    console.log("Please add your team members:");
    // Start with manager function
    manager();
}

// Prompt questions for user input
init(); 