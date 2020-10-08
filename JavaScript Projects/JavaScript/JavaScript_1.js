//Using switch & break statement in a function
function Animal_Function () {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is an awesome animal!";
    switch(Animals) {
        case "Tiger":
            Animal_Output = "A Tiger" + Animal_String;
        break;
        case "Lion":
            Animal_Output = "A Lion" + Animal_String;
        break;
        case "Bear":
            Animal_Output = "A Bear" + Animal_String;
        break;
        case "Giraffe":
            Animal_Output = "A Giraffe" + Animal_String;
        break;
        case "Elephant":
            Animal_Output = "An Elephant" + Animal_String;
        break;
        case "Monkey":
            Animal_Output = "A Monkey" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter an animal exactly as written on the above list!";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

//Using getElementsByClassName
function Class_fxn() {
    var C = document.getElementsByClassName("Click");
    C[1].innerHTML = "Goodbye!"; //[1] index only changes 2nd element in class
}

//Putting a graphic in HTML canvas
function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d"); //calls on canvas

    var img = document.getElementById("flower"); //calls on image
    var grd = ctx.createLinearGradient(0,0,170,0); //creates gradient
    grd.addColorStop(0, "yellow");
    grd.addColorStop(1, "orange");

    ctx.fillStyle = grd;
    ctx.fillRect(0,0,560,390); //positions and sizes the gradient bg
    ctx.drawImage(img,25,25) //draws image in center
}