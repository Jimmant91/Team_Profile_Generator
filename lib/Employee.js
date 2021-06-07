class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

//Functions for each key/value
function getName() {
    return this.name;
}

function getId() {
    return this.id;
}

function getemail() {
    return this.email;
}

//Function to call each employee role
function getRole() {
    return this.constructor.name;
}

module.exports = Employee;