function my_dictionary() {
    var Clothing = {
        Item:"Shirt",
        Size:"Small",
        Color:"Blue",
        Occasion:"Casual"
    };
    document.getElementById("Dictionary").innerHTML = Clothing.Occasion;
}

function my_dictionary2() {
    var Apples = {
        Color:"pink",
        Taste:"sweet",
        Name:"Gala",
    };
    delete Apples.Name;
    document.getElementById("Dictionary2").innerHTML = Apples.Name;
}