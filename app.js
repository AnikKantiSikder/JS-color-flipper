const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //Get random number between 0 - 3. Like colors[0]
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];

    color.textContent = colors[randomNumber];
});

//Random number generated from random
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}