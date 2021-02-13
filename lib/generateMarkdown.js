function displayEmployeeListInfo(data) {
  console.log(data);
  if(data.length != 0){
    let main = '';

    main = `${data.map(employee => {let section = '';
    for(const propoerty in employee){section += `
${propoerty}: ${employee[propoerty]}`;
    }return section;})}
`;

    return main;
  }
  else{
    return "";
  }
}

function generateMarkdown(data) {
  return `${ displayEmployeeListInfo(data.manager)}
  ${ displayEmployeeListInfo(data.engineerList)}
  ${ displayEmployeeListInfo(data.internList)}`;


}

module.exports = generateMarkdown;
