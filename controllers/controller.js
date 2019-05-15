"use strict";
var userCar = Car;
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    var info = document.getElementById('carInfo');
    info.innerHTML = "Car Number Plate: " + car.plate
        + "</br> COLOR: " + car.color + "</br> BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}
// Gather input from user and display
function carFormSubmit() {
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBranch");
    var color = document.getElementById("inputColor");
    var userCar = new Car(plate.value, color.value, brand.value);
    if (plate.value && brand.value && color.value) {
        // here we send the data to the browser
        displayCarData();
        console.log("num plate is " + plate.value + "<br>");
        console.log("made of car is " + brand.value);
        console.log("Color is " + color.value);
    }
    else {
        var data = document.getElementById('carInfo');
        data.innerHTML = "missing data";
        console.log("missing");
    }
}
// display car data input
function displayCarData() {
    // we send the input data to the browser
    var plate = document.getElementById("inputPlate");
    var brand = document.getElementById("inputBranch");
    var color = document.getElementById("inputColor");
    var dataInput = document.getElementById('carInfo');
    dataInput.innerHTML = "num plate is " + plate.value + "<br>"
        + "Brand is " + brand.value + "<br>"
        + "color is " + color.value;
}
// Gather input from user
function wheelFormSubmit() {
    for (var i = 0; i <= 4; i++) {
        var brandIdELe = document.getElementById("idWheel" + i);
        var diameterIdEle = document.getElementById("diameter" + i);
        console.log(brandIdELe, diameterIdEle);
    }
}
