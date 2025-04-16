let buttonEle = document.getElementById("click-btn");
console.log(buttonEle);

let messageEle = document.getElementById("message");
console.log(messageEle);

let customEle = document.getElementById("custom-ink");
console.log(customEle);

let clicked = false;
const defaultText = "";

buttonEle.addEventListener("click", function () {
    alert('Button Clicked!');
    
    messageEle.textContent = 'PLP Web Dev JavaScript Assignment'
    buttonEle.style.background = "orangered";
    messageEle.style.color = "white";
    customEle.style.color = "lime";

});