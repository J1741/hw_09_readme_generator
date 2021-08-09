// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
### Requirements
${data.requirements}

### Steps
Step 1. Clone the project repo here: ${data.repoURL}

Step 2. Run the following command in ${data.installLoc}:
${data.installCmd}

## Usage
After you have completed installation, do the following to launch the ${data.title} application:

Step 1. Open a terminal and navigate to ${data.launchLoc}

Step 2. Run the following command there:
${data.launchCmd}

Step 3. While the application is running, ${data.userActions}

Step 4. Once the application has finished running, ${data.userExpectations}

## License
Copyright (c) 2021 ${data.username}\n
This software is licensed under the ${data.license}.

## Contributing
Contributions to the ${data.title} project are welcome!

The project repo can be forked here: ${data.repoURL}

## Tests
${data.tests}

## Questions
Questions and inquiries about the ${data.title} project can be directed to the developer via GitHub: https://github.com/${data.username}

Or via email: ${data.email}
`;

}

// module.exports = generateMarkdown;
module.exports.generateMarkdown = generateMarkdown;
