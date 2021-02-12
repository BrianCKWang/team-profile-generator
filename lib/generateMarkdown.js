function displaySteps(instructions) {
  if(instructions.length > 1){
  return `
  ${instructions.map(({step}) => {
    return `1. ${step}
  `
  }).join('')}
  `;
  }
  else{
  return `
  ${instructions.map(({step}) => {
    return `   ${step}
  `
  }).join('')}
  `;
  }
}

function displayScreenshot(link){
  if(link != null && link != ""){
    return `![main pic](${link})`
  }
  else{
    return ``;
  }
}

function generateMarkdown(data) {
  return `# ${data.project.title}
## Description
${data.project.description}

${displayScreenshot(data.project.screenshotLink)}

## Table of Contents
* [Usage](#usage)
* [Installation](#installation)
* [Test](#test)
* [Contribution Guidelines](#contribution-guidelines)
* [Questions](#questions)
* [License](#license)

## Installation
${displaySteps(data.installation)}

## Usage 
${displaySteps(data.usage)}

## Test
${displaySteps(data.test)}

## Contribution Guidelines
${displaySteps(data.contributionGuideline)}

## Questions
What is your github username? 

  * https://github.com/${data.github}

Where can I reach out to you for questions? 

  * Email: ${data.email}

## License
This project is licensed under:

${renderLicenseBadge(data.license.license)}

`;
}

module.exports = generateMarkdown;
