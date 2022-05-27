// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseGlobal;
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    licenseGlobal = "Apache 2.0";
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === "IBM Public 1.0") {
    licenseGlobal = "IBM Public 1.0";
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
  if (license === "Mozilla Public 2.0") {
    licenseGlobal = "Mozilla Public 2.0";
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? `[${license}](./license.txt)` : " ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

View the License ${renderLicenseLink(license)} 
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   ${renderLicenseBadge(data.license)}
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Contributors](#contributors)

[Tests](#tests)

[Licenses](#licenses)

[Questions](#questions)

## Description

${data.description}

## Installation

${data.install}

## Usage

${data.usage}

## Contributors

${data.contribution}

## Tests

${data.test}

${renderLicenseSection(licenseGlobal)}

## Questions?

GitHub:  ${data.github}  
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
