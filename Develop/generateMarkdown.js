
function renderLicenseBadge(license) {
  if (!license || license === 'Other: Must add to file') {
    return '';
  }
  return `[![License](https://img.shields.io/badge/License-${response.licenseInput}-brightgreen.svg)](https://opensource.org/licenses/${response.licenseInput})`;
}

function renderLicenseLink(license) {
  if (!license || license === 'Other: Must add to file') {
    return '';
  }
  return `[License Details](https://opensource.org/licenses/${license})`;
}

function renderLicenseSection(license) {
  if (!license || license === 'Other: Must add to file') {
    return '';
  }
  return `## License

${renderLicenseBadge(license)}

This project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
}

function generateMarkdown(response) {
  const readmeContent = `
# ${response.titleInput}

## Description
${response.descriptionInput}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installInput}

## Usage
${response.usageInput}

## License
[![License](https://img.shields.io/badge/License-${response.licenseInput}-brightgreen.svg)](https://opensource.org/licenses/${response.licenseInput})

This project is licensed under the ${response.liscenseInput} license.

## Contributing
${response.contributeInput}

## Tests
${response.testInput}

## Questions
GitHub: [${response.gitInput}](https://github.com/${response.gitInput})
Email: ${response.emailInput}
  `;

  return readmeContent; 
}

module.exports = generateMarkdown;
