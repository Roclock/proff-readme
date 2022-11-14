// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the name of your repository? (This is required)',
    //Validate the title, if none given needs a false flag
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a name for your repository')
            return false;
        }
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
