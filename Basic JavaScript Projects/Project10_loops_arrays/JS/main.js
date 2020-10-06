function Call_loop () { //loop
    var number = "";
    var I = 10;
    while (I > 0) { //while I is less than 0, execute the following:
        number += "<br>" + I; //<br> adds space between outputs
        I--; //-- subtracts from I
    }
    document.getElementById("loop").innerHTML = number;
}

function string_length() { //string length property
    var str = "Papaya"
    var n = str.length;
    document.getElementById("string_length").innerHTML = n;
}

//Using For loop
//defining variables
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
            Content += Instruments[Y] + "<br>"; // content = position of Y in array plus page break
        }
        document.getElementById("list_of_instruments").innerHTML = Content;
    }

//Using an array in a function
function array_Function() {
    var Vegetable = []; //defining vegetable array
    Vegetable[0] = "potato"; //starting array index at 0
    Vegetable[1] = "asparagus";
    Vegetable[2] = "broccoli";
    Vegetable[3] = "kale";
    document.getElementById("Array").innerHTML = "This vegetable is " + Vegetable[3] + ".";
}

//Using function with constants
function constant_function() {
    const Stones = {type:"metamorphic", name:"Quartzite", color:"white"};
    Stones.density = "2.7 g/cm^3"; //added new property and value
    document.getElementById("Constant").innerHTML = Stones.name + " is a " + Stones.type + " rock. Its color is typically " + Stones.color + " and has a density of " + Stones.density;
}

//Using "let" keyword
    var Z = 22;
    document.getElementById("let_fxn").innerHTML = Z;
    {let Z = 33;
    document.getElementById("let_fxn2").innerHTML = Z;
    }

//Return statement
function Return_fxn() {
    return Math.PI;
}

document.getElementById("demo").innerHTML = Return_fxn();

//Let keyword

let drink = { //defining properties
    temperature: "hot",
    taste: "sweet",
    color: "brown",
    name: "cider",
    description: function() { //using method to give description
        return `This drink is ${drink.name}. It tastes ${drink.taste}, is ${drink.color} in color, and is typically served ${drink.temperature}.`; //modified string template
    }
};
document.getElementById("let_fxn").innerHTML = drink.description();

//Using Break statement in a loop
var text = "";
var Z;
for (Z = 0; Z < 10; Z++) {
    if (Z === 5) {break; } //loop breaks at 5, used to jump out of loop or continue code after loop if any
    text += "this number is " + Z + "<br>";
}
document.getElementById("break").innerHTML = text;

//Using Continue statement in a loop
//used to break one iteration in the loop, if a specified condition occurs,
//and continues with next iteration w/in loop
var X;
var result = "";
for (X = 0; X <15; X++) {
    if (X===4) {continue; } //cuts off at 4, then continues on until 14 (15th number)
    result += "The number is " + X + "<br>";
}
document.getElementById("continue").innerHTML = result;