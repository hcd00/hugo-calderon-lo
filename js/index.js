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

let messageForm = document.getElementsByName("leave_message")[0];
console.log(messageForm);

messageForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;

    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

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

