const color = document.querySelector('.color');
const button = document.querySelector('.generate');

const getColor = () => {
    const randomColor = Math.random().toString(16).substring(2,8);
    console.log("#" + randomColor)
    document.body.style.backgroundColor = "#" + randomColor
    color.innerHTML = "#" + randomColor;
}

button.addEventListener('click', getColor)
getColor();