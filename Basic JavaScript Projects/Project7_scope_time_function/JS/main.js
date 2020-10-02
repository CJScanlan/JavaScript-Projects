var x = 20; //global variable

function add() { //function using global variable
    document.getElementById("add").innerHTML = x + 3;
}

function multiply() { //function using local variable
    var z = 13;
    document.getElementById("multiply").innerHTML = z * 157;
}

function divide() { //function using console.log to debug (originally did not define y variable)
    var y = 20;
    console.log(y / 20);
    document.getElementById("divide").innerHTML = y / 20;
}

function time_function() { //If/Else function with Date.getHours method
    if (new Date().getHours() >17) { //if current hour is greater than 17 then print:
        document.getElementById("time").innerHTML = "Good evening!";
    }
    else {document.getElementById("time").innerHTML = "Good day!"; //print if current hour is not greater than 17
    }
}

function if_function() { //Self practice for if/else statement
    if (12 > 16) {
        document.getElementById("if_practice").innerHTML = "12 is greater than 16!";
    }
    else {document.getElementById("if_practice").innerHTML = "12 is not greater than 16.";
    }
}

function Coffee_Cups() { //Practice for else statements
    Cups = document.getElementById("Cups").value;
    if (Cups >=4) {
        Coffee = "Slow down there!"
    }
    else {
        Coffee = "Just enough to keep you awake!"
    }
    document.getElementById("Coffee").innerHTML = Coffee;
}

function Time_function2() { //Using Else If in function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}