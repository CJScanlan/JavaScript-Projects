function Ride_Function() { //Ternary example
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function () { //Ternary self-practice
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to":"You can";
    document.getElementById("vote").innerHTML = Can_vote + "  vote!";
}


function Vehicle(Make, Model, Year, Color) { //Constructor function
    this.Vehicle_Make = Make; //using "this" keyword
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //creating object instances
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //writing function with constructors to make sentence
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

var Cat = new Vehicle("Nissan", "Xterra", 2014, "Green"); //Practicing "new" keyword

function myFunction2() { //creating function to be called in HTML
    document.getElementById("New_and_This").innerHTML = 
    "Cat drives a " + Cat.Vehicle_Color +" " + Cat.Vehicle_Make + " "
     + Cat.Vehicle_Model + " made in " + Cat.Vehicle_Year;
}

//Building my own Object Constructor
function Pet(Type, Age, Color, Name) {
    this.Pet_Type = Type;
    this.Pet_Age = Age;
    this.Pet_Color = Color;
    this.Pet_Name = Name;
}

var Cheeto = new Pet("cat", "7 months", "orange", "Cheeto");
function Practice() {
    document.getElementById("practice_function").innerHTML = Cheeto.Pet_Name + " is an " + Cheeto.Pet_Color + " "
     + Cheeto.Pet_Type + " whose age is " + Cheeto.Pet_Age + " old.";
}

//Nested Function Practice
function count_Function () {
    document.getElementById("Nested_Function").innerHTML = Count ();
    function Count () {
        var starting_point = 9;
        function Plus_one() {starting_point += 1;} //nested function
        Plus_one();
        return starting_point;
    }
}