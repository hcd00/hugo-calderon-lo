//footer
let footer = document.createElement('footer');
document.body.appendChild(footer);
//Year
let today = new Date();
let thisYear = today.getFullYear();

//Copyright
let copyright = document.createElement("p");
copyright.innerHTML = `Hugo Calderon ${thisYear} &copy;`;

footer.appendChild(copyright);

//Skills
const skills = ["Javascript", 'Java', 'GitHub', 'HTML'];

let skillsList = document.querySelector("#skills ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

//Form query
let messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", function (e) {
    e.preventDefault();
    //Data to collect
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;

    let messageSection = document.getElementById('messages');
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `
     <a href="mailto:${usersEmail}">${usersName}</a>
  <span>${usersMessage}</span>`;
    //remove button
    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    //attributes
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", function () {
        let entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageSection.append(newMessage);
    messageForm.reset();
})

const githubUrl = 'https://api.github.com/users/hcd00/repos';
fetch(githubUrl)
    .then(response => {
        return response.json();
    })
    .then(response => {
        let repositories = response;
        let projectSection = document.getElementById('Projects');
        //Create a variable named projectList; using "DOM Selection" query the projectSection (instead of the entire document)
        let projectList = projectSection.querySelector('ul');
        for (let i = 0; i < repositories.length; i++) {
            let project = document.createElement('li');
            project.innerText = 'Project Name: ' + repositories[i].name + '\n' +
                'Created: ' + repositories[i].created_at + '\n ' +
                'Description : ' + repositories[i].description + '\n' +
                'Forks: ' + repositories[i].forks;
            projectList.appendChild(project);
        }
    })
    .catch(error => {
        console.error("There were an error in fetching your request.", error);
    })

