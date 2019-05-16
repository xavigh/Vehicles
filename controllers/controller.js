"use strict";
//instantiate Class Car
var userCar;
var plate = document.getElementById("inputPlate");
var brand = document.getElementById("inputBranch");
var color = document.getElementById("inputColor");
var counterClicks = 0;
// Only for testing
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    var info = document.getElementById('carInfo');
    info.innerHTML = "Car Number Plate: " + car.plate
        + "</br> COLOR: " + car.color + "</br> BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}
// Gather input from user and display ------------------------
function carFormSubmit() {
    //instance of Car class called userCar 
    userCar = new Car(plate.value, color.value, brand.value);
    if (plate.value && brand.value && color.value) {
        // here we send the data to the browser
        displayCarData();
    }
    else {
        var data = document.getElementById('carInfo');
        data.innerHTML = "missing user input";
        console.log(data.innerHTML);
    }
}
// Gather input from user
function wheelFormSubmit() {
    for (var i = 1; i <= 4; i++) {
        var brandId = document.getElementById("idWheel" + i);
        var diameterId = document.getElementById("diameter" + i);
        //we send the data of the wheels in html format
        // cast diameterId value to a number
        if (brandId.value && diameterId.value) {
            if (counterClicks >= 1)
                empty();
            counterClicks = 0;
            var wheel2 = new Wheel(Number(diameterId.value), String(brandId.value));
            userCar.addWheel(wheel2); // we add wheels data diameter and brand name
        }
        else {
            if (counterClicks >= 1)
                empty();
            counterClicks = 0;
        }
    }
    counterClicks++;
    console.log(userCar);
    console.log(userCar.wheels);
    displayWheelData();
    //console.log("Json stringify =", JSON.stringify(userCar.wheels));
    // concatenar resultados
    //dataWheels.innerHTML = brandId.value + diameterId.value;
}
function empty() {
    userCar.wheels.length = 0;
}
// display car data input
function displayCarData() {
    var dataInput = document.getElementById('carInfo');
    dataInput.innerHTML = "num plate is " + plate.value + "<br>"
        + "Brand is " + brand.value + "<br>"
        + "color is " + color.value;
}
function displayWheelData() {
    var dataWheels = document.getElementById("wheelInfo");
    var data = (userCar.wheels[0]);
    dataWheels.innerHTML = data.toString();
}
