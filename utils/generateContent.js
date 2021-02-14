function displayEmployeeListInfo(title, data, additionalInfoClass, additionalInfo) {
  let main = `    <br>
    <h4>${title}:</h4>
    <br>
`;
main += `    <section class="row no-gutters">
`
  if(data.length != 0){
    let maxIndex = data.length;

    for(let i = 0; i < maxIndex; i++){
      let dataValues;
      if(i < data.length){
        dataValues = Object.values(data[i]);
      }
      
      if(i < data.length){
      main += `
      <div class="col-sm">
        <article class="card member-card text-black bg-primary mr-1 ml-1 mb-4" style="width:15rem">
          <div id="day-1" class="card-body">
            <h4 class="card-title  text-white"><img src="" alt>${dataValues[0]}</h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item id">ID: <span>${dataValues[1]}</span></li>
              <li class="list-group-item email"><a href="mailto:${dataValues[2]}" class="card-link">Email</a></li>
              ${generateAdditionalField(additionalInfoClass, additionalInfo, dataValues[3])}
            </ul>
          </div>
        </article>
      </div>
    `
      }
    }
    main += `    </section>
`
    return main;
  }
  else{
    return "";
  }
}

const generateAdditionalField = (additionalInfoClass, additionalInfo, dataValues) => {

  switch(additionalInfoClass){
    case 'officeNum':
      return `<li class="list-group-item ${additionalInfoClass}">${additionalInfo}: ${dataValues}</li>`;
    case 'github':
      return `<li class="list-group-item ${additionalInfoClass}">Github: <a href="https://github.com/${dataValues}" target="_blank" class="card-link">${dataValues}</a></li>`;
    case 'school':
      return `<li class="list-group-item ${additionalInfoClass}">School: <a href="https://www.google.com/search?q=${dataValues}" target="_blank" class="card-link">${dataValues}</a></li>`;
  }
}


function generateContent(data){
  // destructure page data by section
  const { manager, engineerList, internList } = data;

  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" >
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link rel="stylesheet" href="./style.css" />
</head>

<body>
  <header class="hero">
  <h1 class="app-title"></i>Team Profile</h1>
  </header>

  <section id="all-member-section" class="container col-12 col-xl-8">
${displayEmployeeListInfo('Management Team', manager, 'officeNum', 'Office')}
${displayEmployeeListInfo('Engineering Team', engineerList, 'github', 'Github')}
${displayEmployeeListInfo('Intern', internList, 'school', 'School')}
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
</body>

</html>`;
};

module.exports = generateContent;
