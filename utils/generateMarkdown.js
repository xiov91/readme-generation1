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
  return `# ${answers.title}

  ## Description
  ${answers.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Credits
  ${answers.credits}
  
  ## License
  ${answers.license}
  
  ## Contributions
  ${answers.contributions}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  * GitHub: ${answers.gitname}
  * E-Mail: ${answers.email}
  
  `;
  
}

module.exports = generateMarkdown;
