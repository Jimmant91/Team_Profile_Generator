const Employee = require("./Employee");

class Engineer extends Employee {
    //Enginner adds github parameter
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return this.consctructor.name;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;