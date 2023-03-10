const inquirer = require("inquirer"); 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


inquirer.prompt([
    
    {
        name:'name',
        message: 'Please enter your name',
        type: 'input'
    },
    {
        name:'employee ID',
        message: 'Please enter your Employee ID',
        type: 'input'
    },
    {
        name: 'email address',
        message: 'Please enter your email address',
        type: 'input'
    },
    {
        name: 'office number',
        message: 'Please enter your office number',
        type: 'input'
    },
    {
        name: 'role',
        message: 'Please enter your name',
        type: 'list',
        choices:[Manager, Engineer, Intern],

    }
      
])
.then(function(answer){
    console.log(answer);
});