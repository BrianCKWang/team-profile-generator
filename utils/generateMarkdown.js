function displayEmployeeListInfo(title, data, additionalInfoClass, additionalInfo) {
  console.log(data);
  let main = `    <br>
    <h4>${title}:</h4>
    <br>
`;

  if(data.length != 0){
    let maxIndex = data.length;

    while(maxIndex%5 != 0){
      maxIndex++;
    }
    console.log(maxIndex);
    for(let i = 0; i < maxIndex; i++){
      let dataValues;
      if(i < data.length){
        dataValues = Object.values(data[i]);
      }
      

      if(i%5==0){
        main += `    <section class="row no-gutters">
`
      }
      if(i < data.length){
      main += `
      <div class="col-md">
        <article class="card text-white bg-primary mr-1 ml-1 mb-4" style="width:15rem">
          <div id="day-1" class="card-body">
            <h4 class="card-title">${dataValues[0]}</h4>
            <p class="card-text icon"> <img src="" alt></p>
            <p class="card-text id">ID: <span>${dataValues[1]}</span></p>
            <p class="card-text email">Email: <span>${dataValues[2]}</span></p>
            <p class="card-text ${additionalInfoClass}">${additionalInfo}: <span>${dataValues[3]}</span></p>
          </div>
        </article>
      </div>
    `
      }
      else{
      main += `
      <div class="col-md">

      </div>
`
      }
      if(i%5==4){
        main += `    </section>
`
      }
    }
    return main;
  }
  else{
    return "";
  }
}


// <section class="row no-gutters">
      
//       <div class="col-md">
//         <article class="card text-white bg-primary mr-1 mb-4" style="width:15rem">
//           <div id="day-1" class="card-body forecast-card forecast-icon">
//             <h4 class="card-title date">Loading</h4>
//             <p class="card-text icon"> <img src="./assets/icons/01d.png" alt></p>
//             <p class="card-text temp">Temp: <span>Loading</span>&#176;C</p>
//             <p class="card-text humidity">Humidity: <span>Loading</span>%</p>
//           </div>
//         </article>
//       </div>

//       <div class="col-md">
//         <article class="card text-white bg-primary mr-1 mb-4" style="width:15rem">
//           <div id="day-2" class="card-body forecast-card forecast-icon">
//             <h4 class="card-title date">Card Title</h4>
//             <p class="card-text icon"> <img src="./assets/icons/01d.png" alt></p>
//             <p class="card-text temp">Temp: <span>Loading</span>&#176;C</p>
//             <p class="card-text humidity">Humidity: <span>Loading</span>%</p>
//           </div>
//         </article>
//       </div>

//       <div class="col-md">

//       </div>

//       <div class="col-md">

//       </div>

//       <div class="col-md">

//       </div>

//     </section>


// function displayEmployeeListInfo(title, data) {
//   console.log(data);
//   if(data.length != 0){
//     let main = '';

//     main = `${data.map(employee => {let section = '';
//     for(const propoerty in employee){section += `
// ${propoerty}: ${employee[propoerty]}`;
//     }return section;})}
// `;

//     return main;
//   }
//   else{
//     return "";
//   }
// }
// function generateMarkdown(data) {
//   return `${ displayEmployeeListInfo(data.manager)}
//   ${ displayEmployeeListInfo(data.engineerList)}
//   ${ displayEmployeeListInfo(data.internList)}`;


// }

function generateMarkdown(data){
  // destructure page data by section
  const { manager, engineerList, internList } = data;

  // console.log("data");
  // console.log(data);
  // console.log("manager");
  // console.log(manager);
  // console.log("engineerList");
  // console.log(engineerList);
  // console.log("internList");
  // console.log(internList);

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

  <section id="info-section" class="col-12 col-xl-8">
${displayEmployeeListInfo('Management Team', manager, 'officeNum', 'Office')}
${displayEmployeeListInfo('Engineering Team', engineerList, 'github', 'Github')}
${displayEmployeeListInfo('Intern', internList, 'school', 'School')}
  </section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
</body>

</html>`;
};

module.exports = generateMarkdown;
