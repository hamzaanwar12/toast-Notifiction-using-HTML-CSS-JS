let colors = ["red","green","blue","orange","lightgrey","pink","black","blueviolet","darkorange","cornflowerblue"]
let counts = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","tweleve","thirteen"]
let button = document.querySelector("button")
let notifications = document.querySelector(".notifications")

let click = 0;

console.log(button)
console.log(notifications)

button.addEventListener("click",()=>
{
    // console.log()
    notifications.insertAdjacentHTML("afterbegin",`<h1 class = newElement style = "color : ${colors[Math.random()*colors.length]};">
                                Message ${counts[click]}
                        </h1>`);
    let element = document.querySelector(".newElement")
    ++click;
    
    setTimeout(()=>{
        element.classList.add("inActive")
        --click;
    },1800) 
})