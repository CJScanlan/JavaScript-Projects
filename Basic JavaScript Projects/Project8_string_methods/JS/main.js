function string_function() { //using concat() method 
    var A = "Let's join ";
    var B = "these words ";
    var C = "together.";
    var sentence = A.concat(B, C); //creating variable to represent concat method
    document.getElementById("demo").innerHTML = sentence;
}

function slice_method() { //Using slice method
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33); //slices between characters 27 and 33 - "Johnny"
    document.getElementById("slice").innerHTML = section;
}

function slice_method2() { //practice slice method
    var sentence = "Bananas for bananas"
    var section = sentence.slice(0,7); //slices at 0 to fit first letter
    document.getElementById("slice2").innerHTML = section;
}

function uppercase() { //function using toUpperCase() method
    var sentence = "It's a beautiful day!";
    var upper = sentence.toUpperCase(); //converts var sentence to uppercase
    document.getElementById("uppercase").innerHTML = upper;
}

function string_Method() { //Numbers to string using numbers method
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function string() { //toString() method practice - converts numbers to string
    var y = 747;
    document.getElementById("string1").innerHTML = y.toString();
}

function precision_Method() {  //formats a number to a specified length using toPrecision()
    var X = 1345233.24358723450345235;
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //signifies number will be 10 digits 
}


function precision2() { //precision method self practice
    var z = 342534656353254;
    document.getElementById("precision2").innerHTML = z.toPrecision(5);
}


function to_fixed() { //using toFixed() method to convert number to string, then round number to defined # of decimals.
    var number = 352.7432657;
    var n = number.toFixed(2); //rounds number to 2 decimals, converts into string.
    document.getElementById("to_fixed").innerHTML = n;
}

function value_of() { //using String valueOf() method to return primitive value of string object (not an object, has no methods)
    var string = "Opalescent";
    var ret = string.valueOf();
    document.getElementById("value").innerHTML = ret;
}