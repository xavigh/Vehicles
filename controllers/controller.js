"use strict";
//instantiate Class Car
var userCar;
var plate = document.getElementById("inputPlate");
var brand = document.getElementById("inputBranch");
var color = document.getElementById("inputColor");
var formCarId = document.getElementById("formCarId");
var wheelsFormId = document.getElementById("wheelsFormId");
var errWheelFormId = document.getElementById("errWheelFormId");
var valNumPlate = false;
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
        validateNumPlate(plate.value);
        displayCarData();
        formCarId.classList.add("d-none");
        wheelsFormId.classList.remove("d-none");
    }
    else {
        var data = document.getElementById('carInfo');
        data.innerHTML = "missing user input";
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
            var wheel2 = new Wheel(Number(diameterId.value), String(brandId.value));
            userCar.addWheel(wheel2); // we add wheels data diameter and brand name          
        }
        else {
            if (counterClicks >= 1)
                empty(userCar);
            counterClicks = 0;
            errWheelFormId.innerHTML = "missing diameter wheel's details !";
            break;
        }
    }
    counterClicks++;
    // we send the wheel data to the browser.
    displayWheelData();
    //console.log("Json stringify =", JSON.stringify(userCar.wheels));
}
function empty(ObjClass) {
    ObjClass.wheels.length = 0;
}
// display car data input
function displayCarData() {
    var dataInput = document.getElementById('carInfo');
    dataInput.innerHTML =
        "<table class='table  table-striped table-hover '>" +
            "<thead class=\"thead-dark\"><tr><th>Number Plate</th><th>Brand</th><th>color</th></tr></thead>" +
            " <tbody><tr>" +
            "<td>" + plate.value + "</td> " +
            "<td>" + brand.value + "</td>" +
            " <td>" + color.value + "</td></tr></tbody>" +
            "</table>";
}
function displayWheelData() {
    var contentTable = "";
    var dataWheels = document.getElementById("wheelInfo");
    // first we lopp the array and we store the content of the table.   
    for (var i = 0; i <= 3; i++) {
        contentTable +=
            "<tr><td>" + userCar.wheels[i].brand + "</td> " +
                "<td>" + userCar.wheels[i].diameter + "</td></tr>";
    }
    dataWheels.innerHTML =
        "<table class='table  table-striped table-hover'>" +
            "<thead class=\"thead-dark\"><tr><th>Brand</th><th>Diameter</th></thead>" +
            "<tbody>" + contentTable + "</tbody></table>";
    console.log(dataWheels.innerHTML);
}
// validation number plate
function validateNumPlate(data1) {
    valNumPlate = false;
    // reg expresion 4 numbers y 3 letters for the number plate.
    var regExp1 = /^\d{4}-?[a-z]{3}$/;
    if (data1 == regExp1) {
        console.log("success", regExp1);
        valNumPlate = true;
    }
    else {
        console.log("fail", regExp1);
        valNumPlate = false;
    }
}
