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
            choices: ['MIT', 'Microsoft Public', 'Boost Software', 'Mozilla Public'],
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


    

    // Answer of the question:


 // Brain Cancer Detection and Tracking with AI

// Description
// This project leverages machine learning and genetic data analysis to develop a system that identifies, tracks, and suggests potential treatments for brain cancer. By integrating biotechnology and advanced coding techniques, the tool aims to assist researchers and healthcare professionals in finding personalized and effective solutions.

// Clone the repository, Install the dependencies

// Launch the app and upload genetic data or imaging scans. Use the dashboard to analyze results, visualize patterns, and export reports. For research use, explore the source code to adapt the models for specific datasets.

// Fork the repository and create a new branch for your feature: 1-git checkout -b feature-name. 2-Submit a pull request detailing the changes and testing process. 3-Ensure code follows project coding standards and includes comments.

// Use sample datasets provided in the data/test_samples directory for functionality testing.  Report any issues with testing by submitting them to the issue tracker.