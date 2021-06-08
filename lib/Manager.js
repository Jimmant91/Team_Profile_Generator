const Employee = require("./Employee");

class Manager extends Employee {
    //Manager adds officeNumber parameter
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.constructor.name;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;