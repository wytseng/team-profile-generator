// Generates a string of all team member html cards
function generateTeam({manager, engineers, interns}) {
  // declare two empty arrays for engineer and intern cards for html strings to be pushed into 
  const engineerCards = [];
  const internCards = [];

  const managerCard = `
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h2 class="my-0 fw-bold">${manager.name}</h2>
        <h3><i class="fa-solid fa-mug-hot fa-xs"></i> Manager</h3>
      </div>
      <div class="card-body">
        <ul class="list-group border-radius-0">
          <li class="list-group-item">id: ${manager.id}</li>
          <li class="list-group-item">email: <a href="mailto:${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">office number: ${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>`

  if (engineers.length > 0) {
    engineers.forEach(engineer => {
      engineerCards.push(`
        <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h2 class="my-0 fw-bold">${engineer.name}</h2>
            <h3><i class="fa-sharp fa-solid fa-user-gear fa-xs"></i> Engineer</h3>
          </div>
          <div class="card-body">
            <ul class="list-group border-radius-0">
              <li class="list-group-item">id: ${engineer.id}</li>
              <li class="list-group-item">email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li class="list-group-item">github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
          </div>
        </div>
      </div>`);
    });
  }

  if (interns.length > 0) {
    interns.forEach(intern => {
      internCards.push(`
        <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h2 class="my-0 fw-bold">${intern.name}</h2>
            <h3><i class="fa-solid fa-graduation-cap fa-xs"></i> Intern</h3>
          </div>
          <div class="card-body">
            <ul class="list-group border-radius-0">
              <li class="list-group-item">id: ${intern.id}</li>
              <li class="list-group-item">email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li class="list-group-item">school: ${intern.school}</li>
            </ul>
          </div>
        </div>
      </div>`);
    });
  }

  return `${managerCard}\n${engineerCards.join('\n')}\n${internCards.join('\n')}`;
}

function generatePage(team) {
  return `
  <!DOCTYPE html>
  <html>
    <head> 
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/1a391047f1.js" crossorigin="anonymous"></script>
      <link href="./style.css" rel="stylesheet" />
      
      <title>About the Team</title>
    </head>

    <body>
      <header class="p-4">
        <div class="header text-center py-4 mb-4 rounded-4">
          <h1>About the Team</h1>
        </div>
      </header>

      <main class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 px-2 mb-3 justify-content-center">
          ${generateTeam(team)}
        </div>
      </main>
    </body>
  </html>`;
}

module.exports = generatePage;
