document.write(typeof "Word"); //write data type

function type() {
    document.getElementById("string").innerHTML = (typeof "Word"); //function to write data type
}

function number() { //function to write NaN
    document.getElementById("number").innerHTML = 0/0;
}

function yes() { //function to confirm value is not a number
    document.getElementById("true").innerHTML = isNaN("word");
}

function no() { //false function to check if value is not a number
    document.getElementById("no").innerHTML = isNaN(571);
}

function infinity() { //function to write infinity
    document.getElementById("infinity").innerHTML = (3E313);
}

function negative_infinity() { //function to write negative infinity
    document.getElementById("n_infinity").innerHTML = (-3E313);
}

function tru() { //boolean true
    document.getElementById("true2").innerHTML = (10>2);
}

function fals() { //boolean false
    document.getElementById("false2").innerHTML = (12<9);
}

console.log(8 + 6); //log in console result of equation
console.log(8*12);

function coercion() { //combine different data types
    document.getElementById("coercion").innerHTML = ("12" + 7);
}

console.log(8>9); //log in console boolean value (false)

function bop() { //function to write == using boolean logic
    document.getElementById("bop").innerHTML = (12*5) == 60;
}

function bip() { //false == function
    document.getElementById("bip").innerHTML = 17 == (18-2);
}

function tog() { //comparing data types and data values
    var x= "cat";
    var y="cat";
    document.getElementById("tog").innerHTML = x===y;
}

function foo() { //different data types and values = false
    var x = 15;
    var y = "seventeen";
    document.getElementById("foo").innerHTML = x===y;
}

function goo() { //same data values but different data types = false
    var x = 12;
    var y = "twelve";
    document.getElementById("goo").innerHTML = x===y;
}

function woo() { //same data types but different values = false
    var x = 13;
    var y = 15;
    document.getElementById("woo").innerHTML = x===y;
}

function and_true() { // using && to compare both statements - true
    document.getElementById("and_true").innerHTML = (6==6 && 10>3);
}

function and_false() { //false && operation
    document.getElementById("and_false").innerHTML = (7<5 && 10>6);
}

function or_true() { //using || OR value; true
    document.getElementById("or_true").innerHTML = (5==5 || 6<5);
}

function or_false() {//using || OR value; false
    document.getElementById("or_false").innerHTML = (5==7 || 8==12);
}

function not_true() { //using NOT operator ! to return "true"
    document.getElementById("not_true").innerHTML = !(6<5);
}

function not_false() { //using NOT ! operator to return "false"
    document.getElementById("not_false").innerHTML = !(6>5);
}