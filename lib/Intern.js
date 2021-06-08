const Employee = require("./Employee");

class Intern extends Employee {
    //Intern adds school parameter
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return this.constructor.name;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;