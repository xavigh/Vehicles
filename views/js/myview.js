"use strict";
//instantiate Class Car
var userCar;
var plate = document.getElementById("inputPlate");
var brand = document.getElementById("inputBranch");
var color = document.getElementById("inputColor");
var formCarId = document.getElementById("formCarId");
var errDiameter1 = document.getElementById("errDiameter1");
var errDiameter2 = document.getElementById("errDiameter2");
var errDiameter3 = document.getElementById("errDiameter3");
var errDiameter4 = document.getElementById("errDiameter4");
// error messages to the user through innerHTML
var errCarInput = document.getElementById("errCarInput");
var wheelsFormId = document.getElementById("wheelsFormId");
var errWheelFormId = document.getElementById("errWheelFormId");
var counterClicks = 0;
var wheelformValidate = false;
// Gather input from user and display ------------------------
function carFormSubmit() {
    //instance of Car class called userCar 
    userCar = new Car(plate.value, color.value, brand.value);
    if (plate.value && brand.value && color.value && validateNumPlate(plate.value)) {
        // here we send the data to the browser
        displayCarData();
        formCarId.classList.add("d-none");
        wheelsFormId.classList.remove("d-none");
        errCarInput.innerHTML = "";
    }
    else {
        var errCarInfo = document.getElementById('errCarInput');
        var errNumPlateId = document.getElementById('errNumPlate');
        var errNumPlate = "wrong number plate format";
        var errMissingCarInfo = "missing user input ";
        if (validateNumPlate(plate.value)) {
            errCarInfo.innerHTML = errMissingCarInfo;
            errNumPlateId.innerHTML = "";
        }
        else {
            errNumPlateId.innerHTML = errNumPlate;
            errCarInfo.innerHTML = "";
        }
    }
}
// Gather input about wheels from user
function wheelFormSubmit() {
    for (var i = 1; i <= 4; i++) {
        var brandId = document.getElementById("idWheel" + i);
        var diameterId = document.getElementById("diameter" + i);
        //check for empty fields in form wheels
        checkWheelFormEmptyValues(brandId.value, diameterId.value);
        if (!wheelformValidate) {
            wheelformValidate = false;
            errWheelFormId.innerHTML = "please fill in form!";
            break;
        }
        //check diameter validation
        var valDiamResult = validateDiameterNumberValue(Number(diameterId.value));
        if (!valDiamResult) {
            wheelformValidate = false;
            errWheelFormId.innerHTML = "Diameter must be between 0.4 and 4";
            break;
        }
    }
    // now I have to display the data after validation of empty fields and numbers validation
    for (var i = 1; i <= 4; i++) {
        var brandId = document.getElementById("idWheel" + i);
        var diameterId = document.getElementById("diameter" + i);
        if (brandId.value && diameterId.value && wheelformValidate) {
            var wheel2 = new Wheel(Number(diameterId.value), String(brandId.value));
            userCar.addWheel(wheel2); // we add wheels data diameter and brand name 
            wheelformValidate = true;
            errWheelFormId.innerHTML = "";
            wheelsFormId.classList.add("d-none");
        }
    }
    counterClicks++;
    // we send the wheel data to the browser.
    wheelformValidate ? displayWheelData() : false;
}
// display car data input to user in a table
function displayCarData() {
    var dataInput = document.getElementById('carInfo');
    dataInput.innerHTML =
        "<table class='table-sm table-dark table-striped table-hover '>" +
            "<thead class=\"thead-dark\"><tr><th>Number Plate</th><th>Brand</th><th>color</th></tr></thead>" +
            " <tbody><tr>" +
            "<td>" + plate.value + "</td> " +
            "<td>" + brand.value + "</td>" +
            " <td>" + color.value + "</td></tr></tbody>" +
            "</table>";
}
// display wheel data to user in a table
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
        "<table class='table table-dark table-striped table-hover'>" +
            "<thead class=\"thead-dark\"><tr><th>Brand</th><th>Diameter</th></thead>" +
            "<tbody>" + contentTable + "</tbody></table>";
}
