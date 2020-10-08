function validateForm() { //creates alert box if form is not fully filled
    var x = document.forms["myForm"]["fname", "lname", "email"].value;
    if (x == ""){
        alert("Form must be completely filled out");
        return false;
    }
}