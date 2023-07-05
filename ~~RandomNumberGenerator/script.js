const number = document.querySelector('.number');
const button = document.querySelector('.generate');

const generate = () => {
    //Gnerates Random Number between 1 to 50
    const randomNumber = Math.floor(Math.random() * 50 + 1);
    number.innerHTML = randomNumber;
}

button.addEventListener('click',generate)

