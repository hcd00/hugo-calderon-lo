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

for (let i=0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}
