import inquirer from "inquirer";
import fs from "fs";

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your Project Title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information?',
        },
        {
            type: 'input',
            name: 'contribution ',
            message: 'Enter the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions?',
        },
        {
            type: 'list',
            name: 'licences',
            choices: ['option1', 'option2', 'option3', 'option4'],
        },
        {
            type: 'input',
            name: 'userName',
            message: 'Please enter GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Email?',
        }

    ])
    .then((ressponse) => {
        const redmeFile = `
## ${ressponse.title}
    
## Licence
${ressponse.licences}

## Description
${ressponse.description}

# Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

# Installation

${ressponse.installation}

## Usage

${ressponse.usage}

## License

${ressponse.licences}

## Contributing

${ressponse.contribution}

## Test

${ressponse.test}

## Questions

For questions or additional information, please reach out:
- GitHub: [${ressponse.github}](https://github.com/${ressponse.github})
- Email: [${ressponse.email}](mailto:${ressponse.email})

 `;
        fs.writeFile('README.md', redmeFile, (err) => {
            if (err) {
                console.log('Error wriing to file:', err);

            } else {
                console.log('README file has successfully generated README.md');

            }
        })

    })











// What was your motivation?
// Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// What problem does it solve?
// What did you learn?
// What makes your project stand out?

// # A first-level heading
// ## A second-level heading
// ### A third-level heading