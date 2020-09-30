function math() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " + addition;
}

function subtraction() {
    var subtraction = 5 - 2;
    document.getElementById("math2").innerHTML = "5 - 2 = " + subtraction;
}

function multiply() {
     var multiplication = 5 * 27;
     document.getElementById("demo").innerHTML = "5 * 27 = " + multiplication;
}

function multiple_math() {
    var value = 2 * 8 / 16 + 6;
    document.getElementById("demo2").innerHTML = "2 multiplied by 8 then divided by 16 and added by 6 equals " + value;
}

function modulus_Operation() {
    var simple_math = 25 % 6;
    document.getElementById("math3").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negate() {
    var x = 12;
    document.getElementById("negate").innerHTML = -x;
}

var z = 13;
z--;
document.write(z);

var y = 15;
y++;
document.write(y);


window.alert(Math.random() * 100);


function power() {
document.getElementById("power").innerHTML = Math.pow(7,3);
}
