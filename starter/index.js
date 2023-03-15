const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const render = require("./src/page-template.js");

const promptManager = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        message: "Please enter your name",
        type: "input",
      },
      {
        name: "employee ID",
        message: "Please enter your Employee ID",
        type: "input",
      },
      {
        name: "email address",
        message: "Please enter your email address",
        type: "input",
      },
      {
        name: "office number",
        message: "Please enter your office number",
        type: "input",
      },
      {
        name: "role",
        message: "Please enter your name",
        type: "list",
        choices: ["Add engineer", "Add intern", "Finish creating the team"],
      },
      {
        name: "engineer",
        message: "Please type the engineers name",
        type: "input",
      },
      {
        name: "engineer id",
        message: "Please type the engineers ID",
        type: "input",
      },
      {
        name: "engineer email",
        message: "Please type the email address",
        type: "input",
      },
      {
        name: "engineer github",
        message: "Please type the GitHub username",
        type: "input",
      },
      {
        name: "intern name",
        message: "What is the interns name?",
        type: "input",
      },
      {
        name: "intern id",
        message: "Please type the ID",
        type: "input",
      },
      {
        name: "intern email",
        message: "Please type the email address",
        type: "input",
      },
      {
        name: "school",
        message: "What is the interns school?",
        type: "input",
      },
    ])
    .then(function (answer) {
      console.log(answer);
      const manager = new Manager(
        answer.name,
        answer.employeeId,
        answer.email,
        answer.officeNumber
      );
      teamMembers.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which option would you like to continue with:',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                promptEngineer();
                break;
                case "add an intern":
                    promptIntern();
                    break;
                    default:
                        buildTeam();
            }
        });
};

const promptEngineer = () => {
    console.log(`
    ==================
    Add a new Engineer
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter a valid name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the ID of the employee? (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter a valid ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username? (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })

};

const promptIntern = () => {
    console.log(`
    ==================
    Add a new Intern
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter a valid name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the ID of the employee? (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter a valid ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school name',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter your school name');
                    return false;
                }
            }
        }
]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
    teamMembers.push(intern);
    promptMenu();

})

};

const buildTeam = () => {
    console.log(`
    ===========================
    Finished building the team!
    ===========================
    `);

    if(!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

promptManager;