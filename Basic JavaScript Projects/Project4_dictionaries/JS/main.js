function my_dictionary() {
    var Clothing = { //Lists properties of object
        Item:"Shirt",
        Size:"Small",
        Color:"Blue",
        Occasion:"Casual"
    };
    document.getElementById("Dictionary").innerHTML = Clothing.Occasion; //displays Occasion on HTML page
}

function my_dictionary2() {
    var Apples = {
        Color:"pink",
        Taste:"sweet",
        Name:"Gala",
    };
    delete Apples.Name; //deletes Name category
    document.getElementById("Dictionary2").innerHTML = Apples.Name;
}