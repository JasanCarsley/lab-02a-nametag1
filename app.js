const name = document.getElementById('Name');
const nameInput = document.getElementById('Name-input');
const nameButton = document.getElementById('Name-button');

nameButton.addEventListener('click', () => {
   
    const userInput = name.value;
    myName.textContent = userInput;
});



