// TODO: Include packages needed for this application
import { writeFile } from 'fs';
import inquirer from 'inquirer';
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the name of your Repo? (This is required)',
    //Validate the title, if none given needs a false flag
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('I dont like to name things either, use asnldf or something.')
            return false;
        }
    }
}, //Title of repo
{
    type: 'input',
    name: 'description',
    message: 'What is the description of your Repo?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a desciption of the repository.');
            return false;
        }
    }
}, //Description of repo
{
    type: 'input',
    name: 'installation',
    message: 'What are the directions for installation?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Explain to me like Im five');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples on how to use your program',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Explain to me like Im five');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contributors',
    message: 'Please provide who helped with your program',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('If its just you, say that. Gosh!');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'licenses',
    message: 'What kind of license are you using?',
    choices: ["GPL","Apache","MIT","Rust"],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Are you sure you dont want a license? Thats not too smart.');
            return false;
        }
    }
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        let output = ''
        output += `# ${answers.title}\n`
        output += `## ${answers.description}\n`
        output += `## ${answers.installation}\n`
        output += `## ${answers.usage}\n`
        output += `## ${answers.contributions}\n`
        output += `## ${answers.licenses}\n`,
writeToFile ('README.md', output)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    }); }

// Function call to initialize app
init();
