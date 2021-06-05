// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Employee classes
const Manager;
const Engineer;
const Intern;

//Empty list to push team members to
const team = [];

// Questions for adding more members or ending 
const moreQs = [
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
        // ask manager questions
        .prompt(require("./managerQuestions"))
        // take the response and create a new manager
        .then( (response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            // Add manager object to team list
            team.push(manager);
            // Run moreQs function to ask if more members should be added
            addMore();
        });
}

function engineer() {
    inquirer
        .prompt(require("./engineerQuestions"))
        .then( (response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            // Add engineer object to team list
            team.push(engineer);
            // Run moreQs function to ask if more members should be added
            addMore();
        });
}

function intern() {
    inquirer
        .prompt(require("./internQuestions"))
        .then( (response) => {
            const intern = new Intern(response.name, response.id, response.email, response.university);
            // Add intern object to team list
            team.push(intern);
            // Run moreQs function to ask if more members should be added
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
                    // if done, write to file with info provided
                    // call the generateTeam function to create the HTML
                    // https://stackoverflow.com/questions/2496710/writing-files-in-node-js
                    fs.writeFileSync("./output/index.html", generateTeam(team));
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