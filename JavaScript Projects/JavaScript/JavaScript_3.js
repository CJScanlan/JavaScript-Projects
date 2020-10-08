//Using data-attribute to increase interactivity
function displayType(animal) {
    var animalType = animal.getAttribute("data-animal-type");
    alert(animalType + " are found in " + animal.innerHTML + " biomes!");
}