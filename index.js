// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const licenseMap = require("./license.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your projects title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project.",
  },
  {
    type: "input",
    name: "install",
    message: "Please enter the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter a description of this apps usage information.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter guidelines for contributors.",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter test instructions.",
  },
  {
    type: "rawlist",
    name: "license",
    message: "What license would you like to use?",
    choices: ["Apache 2.0", "IBM Public 1.0", "Mozilla Public 2.0"],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub link",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markDown = generateMarkdown(data);
  if (data.license in licenseMap) {
    fs.writeFile("./Output/license.txt", licenseMap[data.license], (err) => {
      err ? console.error(err) : console.log("Success!");
    });
  }
  fs.writeFile(fileName, markDown, (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("./Output/readMe.md", response);
  });
}
// Function call to initialize app
init();
