// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const markdown = require('markdown-it')();

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter project title: ',
    name: 'titleInput'
  },
  {
    type: 'input',
    message: 'Enter description of project: ',
    name: 'descriptionInput'
  },
  {
    type: 'input',
    message: 'Enter installation instructions: ',
    name: 'installInput'
  },
  {
    type: 'input',
    message: 'Enter usage information: ',
    name: 'usageInput'
  },
  {
    type: 'input',
    message: 'Enter contributions guidelines: ',
    name: 'contributeInput'
  },
  {
    type: 'input',
    message: 'Enter test instructions',
    name: 'testInput'
  },
  {
    type: 'list',
    message: 'Select the license are you using.',
    name: 'licenseInput',
    choices: [
      "AGPL-3.0",
      "Apache-2.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "BSL-1.0",
      "CC0-1.0",
      "EPL-2.0",
      "GPL-2.0",
      "GPL-3.0",
      "LGPL-2.1",
      "MIT",
      "MPL-2.0",
      "Unlicense",
      "Other: Must add to file"
    ]
  },
  {
    type: 'input',
    message: 'Enter Github username: ',
    name: 'gitInput'
  },
  {
    type: 'input',
    message: 'Enter email address: ',
    name: 'emailInput'
  },
];

function writeToFile(response) {

  const readmeContent = generateMarkdown(response);

  fs.writeFile(`${response.titleInput}.md`, readmeContent, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    } else {
      console.log('README.md file has been successfully created.');
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then(writeToFile)
    .catch((err) => console.error(err));
}

init();