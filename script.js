const num1 = parseInt(document.getElementById("num1-el").value)
const num2 = parseInt(document.getElementById("num2-el").value)

let add = document.getElementById("add")
let minus = document.getElementById("subtract")
let times = document.getElementById("multiply")
let breakBy = document.getElementById("divide")
let show = document.getElementById("display")


// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

add.addEventListener("click", sum);
minus.addEventListener("click", subtract);
times.addEventListener("click", multiply);
breakBy.addEventListener("click", divide);

function sum(){
    result = num1 + num2
    show.textContent += " " + result
}

function subtract(){
    result = num1 - num2
    show.textContent += " " + result
}

function multiply(){
    result = num1 * num2
    show.textContent += " " + result
}

function divide(){
    result = num1 / num2
    show.textContent += " " + result
}

