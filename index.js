const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const employees = [];

const promptManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'teamManagerName',
        message: 'What is the team manager´s name?',
      },
      {
        type: 'input',
        name: 'teamManagerId',
        message: 'What is the team manager´s id?',
      },
      {
        type: 'input',
        name: 'teamManagerEmail',
        message: 'What is the team manager´s email?',
      },
      {
        type: 'input',
        name: 'teamManagerOfficeNumber',
        message: 'What is the team manager´s Office Number?',
      },         
      {
        type: 'list',
        name: 'typeofteamAdd',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'i dont want to add any team members'],
      },      
        
    ]);
  };
  


  const promptEmployee = (typeOfMember) => {

    if (typeOfMember=='Engineer'){
      return inquirer.prompt([
        {
          type: 'input',
          name: 'teamEngineerName',
          message: 'What is the team engineer´s name?',
        },
        {
          type: 'input',
          name: 'teamEngineerId',
          message: 'What is the team engineer´s id?',
        },
        {
          type: 'input',
          name: 'teamEngineerEmail',
          message: 'What is the team engineer´s email?',
        },        
        {
          type: 'input',
          name: 'teamEngineerGit',
          message: 'What is the team engineer´s Git Hub username?',
        },        
        {
          type: 'list',
          name: 'typeofteamAdd',
          message: 'Which type of team member would you like to add?',
          choices: ['Engineer', 'Intern', 'i dont want to add any team members'],
        },
      ]);
    }//end if Engineer
    

    if (typeOfMember=='Intern'){
      return inquirer.prompt([
        {
          type: 'input',
          name: 'teamInternName',
          message: 'What is the team intern´s name?',
        },
        {
          type: 'input',
          name: 'teamInternId',
          message: 'What is the team intern´s id?',
        },
        {
          type: 'input',
          name: 'teamInternEmail',
          message: 'What is the team intern´s email?',
        }, 
        {
          type: 'input',
          name: 'teamInternSchool',
          message: 'What is the team intern´s school?',
        },        
        {
          type: 'list',
          name: 'typeofteamAdd',
          message: 'Which type of team member would you like to add?',
          choices: ['Engineer', 'Intern', 'i dont want to add any team members'],
        },
      ]);
    }//end if Engineer

    
    
  };


const addMember = (answers,typeOfMember) => {
    //console.log('Save answers',answers);
    saveAnswers(answers,typeOfMember);
    if (answers.typeofteamAdd == 'Engineer' || answers.typeofteamAdd == 'Intern') {
        console.log('next answers.typeofteamAdd',answers.typeofteamAdd);
        //init()
        //addTeam(typeOfMember);
        return answers.typeofteamAdd
    }
    else {//if the answer is i dont want to add any team members
      generateHTML(employees);
      return "";
      //call the function generateHTML with the employees[] array  as a parameter
      
    }
}  


const saveAnswers = (answers,typeOfMember) =>  {
  console.log('Save answers:',answers);
  console.log('Type of member:',typeOfMember)

  //create the class depending of the type of employee
  if (typeOfMember == "Manager"){
    const newManager = new Manager(answers.teamManagerName, answers.teamManagerId,answers.teamManagerEmail,answers.teamManagerOfficeNumber);
    employees.push(newManager);
  }
  if (typeOfMember == "Engineer"){
    //const newEngineer = new Engineer('Bruno Glz','D2785864','bruno@criptosedena.com','bruno@git');
    const newEngineer = new Engineer(answers.teamEngineerName,answers.teamEngineerId,answers.teamEngineerEmail,answers.teamEngineerGit);
    employees.push(newEngineer);
  }
  if (typeOfMember == "Intern"){
    //const newIntern = new Intern('Gael Glz','D2785865','gael@criptosedena.com','Oxford');
    const newIntern = new Intern(answers.teamInternName,answers.teamInternId,answers.teamInternEmail,answers.teamInternSchool);
    employees.push(newIntern);
  }

  //push the new class to the employees[] array 
  console.log('employees array',employees);

}

//in the generateHTML function search the properties and metods inside the classes inside the employees array and put it into the html file


  
  const generateHTML = (employees) => {
    //console.log('employees inside generateHTML',employees);
    numberOfEmployees = employees.length;
    //console.log('number of employees',numberOfEmployees);

    let employeesHtml = "";
    //const managerHtml = "";

    for (let index = 0; index < employees.length; index++) {
      const employeesObj = employees[index];
      objName = employees[index].constructor.name;
      //console.log('employees object name',objName);      
      
      if (objName == 'Manager'){
        //console.log('Manager data:',employeesObj.name,employeesObj.id,employeesObj.email,employeesObj.officeNumber);
        managerHtml =  
        `
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header" style="background-color:cornflowerblue; color:white;">
                ${employeesObj.name} Manager
              </h3>
              <div class="card-body" style=" background-color:ghostwhite;">               
                  <ul>
                      <li>Id:  ${employeesObj.id}</li>
                      <li>Email: <a href="mailto:${employeesObj.email}">${employeesObj.email}</a> </li>
                      <li>Office number: ${employeesObj.officeNumber}</li>
                  </ul>                
              </div>
            </div>
          </div>        
        
        `;
        employeesHtml = employeesHtml + managerHtml;
      }
      if (objName == 'Engineer'){
        engineerHtml =  
        `
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header" style="background-color:cornflowerblue; color:white;">
                ${employeesObj.name} Engineer
              </h3>
              <div class="card-body" style=" background-color:ghostwhite;">               
                  <ul>
                      <li>Id:  ${employeesObj.id}</li>
                      <li>Email: <a href="mailto:${employeesObj.email}">${employeesObj.email}</a> </li>
                      <li>Git Hub: <a href="https://github.com/${employeesObj.github}" target="_blank">${employeesObj.github}</a></li>
                  </ul>                
              </div>
            </div>
          </div>        
        
        `;
        employeesHtml = employeesHtml + engineerHtml;
        
      }
      if (objName == 'Intern'){
        internHtml =  
        `
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header" style="background-color:cornflowerblue; color:white;">
                ${employeesObj.name} Intern
              </h3>
              <div class="card-body" style=" background-color:ghostwhite;">               
                  <ul>
                      <li>Id:  ${employeesObj.id}</li>
                      <li>Email: <a href="mailto:${employeesObj.email}">${employeesObj.email}</a> </li>
                      <li>School: ${employeesObj.school}</li>
                  </ul>                
              </div>
            </div>
          </div>        
        
        `;
        employeesHtml = employeesHtml + internHtml;
      }


    } 


    const htmlBody = 
    `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">

  <title>Team Profile Generator</title>
</head>

<body>
  <header style="text-align: center; background-color: brown; color:aliceblue; padding:20px;">    
     <h1>My Team</h1>
  </header>

  <main class="container">
    <section class="row">
      <div class="col-12 col-md-9">
        <h2>Employees</h2>
        <section class="row">
          ${employeesHtml}
        </section>
      </div>
    </section>
  </main>

</body>

</html>
    `

    //return htmlBody;
    fs.writeFileSync('./dist/index.html', htmlBody);

  }

 

// Bonus using writeFileSync as a promise
const init = () => {
  promptManager()
    // Use writeFileSync method to use promises instead of a callback function
    //.then((answers) => fs.writeFileSync('README.md', generateReadme(answers)))
    .then((answers) => addMember(answers,'Manager'))
    .then((typeOfMember) => addAnother(typeOfMember))
    .catch((err) => console.error(err));
};

init();


const addAnother = (typeOfMember) => {
  if (typeOfMember==""){
    console.log('End of register');
  }  
  else{//if type of member is engineer or intern
    promptEmployee(typeOfMember)
      // Use writeFileSync method to use promises instead of a callback function
      //.then((answers) => fs.writeFileSync('README.md', generateReadme(answers)))
      .then((answers) => addMember(answers,typeOfMember))//this typofmember is the actual
      .then((typeOfMember) => addAnother(typeOfMember)) //this typeofmember is the returned for the anser prompt
      .catch((err) => console.error(err));
  }
};


