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
        choices:["Add engineer", "Add intern", "Finish creating the team"],

    },
    {
        name: 'engineer',
        message: 'Please type the engineers name',
        type: 'input',
        
    },
    {
        name: 'engineer id',
        message: 'Please type the engineers ID',
        type: 'input',
        
    },
    {
        name: 'engineer email',
        message: 'Please type the email address',
        type: 'input',
        
    },
    {
        name: 'engineer github',
        message: 'Please type the GitHub username',
        type: 'input',
        
    },
    {
        name: 'intern name',
        message: 'What is the interns name?',
        type: 'input',
        
    },
    {
        name: 'intern id',
        message: 'Please type the ID',
        type: 'input',
        
    },
    {
        name: 'intern email',
        message: 'Please type the email address',
        type: 'input',
        
    },
    {
        name: 'school',
        message: 'What is the interns school?',
        type: 'input',
        
    }

      
])
.then(function(answer){
    console.log(answer);
});