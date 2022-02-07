const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//How hex color works
//# then 6 numbers- #f15025

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//Add event listener to button
btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

//Random number generate
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}