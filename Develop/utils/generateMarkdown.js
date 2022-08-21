let licenseBadge = '';
let licenseName = '';
let licenseLink = '';
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0':
      licenseBadge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
      licenseName = 'Apache 2.0';
      break;
    case 'MIT':
      licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
      licenseName = 'MIT';
      break;
    case 'MPL 2.0':
      licenseBadge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
      licenseName = 'MPL 2.0'
      break;
    case 'IPL 1.0':
      licenseBadge = 'https://img.shields.io/badge/License-IPL_1.0-blue.svg'
      licenseName = 'IPL 1.0'
      break;
    default: 
    licenseBadge = '';
    licenseName = '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0'
      break;
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT'
      break;
    case 'MPL 2.0':
      licenseLink = 'https://opensource.org/licenses/MPL-2.0'
      break;
    case 'IPL 1.0':
      licenseLink = 'https://opensource.org/licenses/IPL-1.0'
      break;
    default: 
    licenseLink = '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
  licenseBadge.replaceAll('"', '');
  licenseName.replaceAll('"', '');
  licenseLink.replaceAll('"','');
  return `[![License: ${licenseName}](${licenseBadge})](${licenseLink})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contribution, test, license, github, email}) {
  renderLicenseBadge(license);
  renderLicenseLink(license);
  return `# ${title}

 ${renderLicenseSection()}

  ## Description
  ${description}

  ## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contribution](#contribution)
   * [Test](#test)
   * [Questions](#questions)
   * [License](#license)
   
  ## Installation
   ${installation}

  ## Usage
   ${usage}

  ## Contribution
   ${contribution}

  ## Test
   ${test}

  ## Questions
   * View my [GitHub profile](https://github.com/${github})
   * For additional questions, please [send me an email](mailto:${email})
  
  ## License
  Licensed under the ${license} license.
`;

}

module.exports = generateMarkdown;
