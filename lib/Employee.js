class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

//Functions for each key/value
getName() {
    return this.name;
}

getId() {
    return this.id;
}

getemail() {
    return this.email;
}

//Function to call each employee role
getRole() {
    return this.constructor.name;
}

module.exports = Employee;