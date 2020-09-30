var X ="fire";
var Y="water";
var X = X.fontcolor("orange");
var Y = Y.fontcolor("blue");

function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
}

document.write(X);
document.write(Y);

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book"; //new method to concatenate
    document.getElementById("Concatenate").innerHTML = sentence;
}

function Test() {
    var str = "Purple";
    var result = str.fontcolor("purple");
    document.getElementById("demo").innerHTML = result;
}

function add(x,y) {
    return x + y;
}
document.getElementById("addition").innerHTML = add(5, 7);
