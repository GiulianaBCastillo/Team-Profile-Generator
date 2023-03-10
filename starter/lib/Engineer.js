const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubUser, role) {
        super(name, id, email);

        this.github = githubUser;
    }

    getgithubUser() {
        return this.getgithubUser;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;