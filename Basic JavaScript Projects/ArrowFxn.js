var str = "Red";
var color = str.fontcolor("red");

ArrowFxn = () => color; //uses arrow to make concise function statement
//works with 1 statement

function Click() { //Allows for ArrowFxn to be called on button click
document.getElementById("arrow").innerHTML = ArrowFxn();
}