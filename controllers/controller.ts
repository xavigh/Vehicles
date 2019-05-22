
//instantiate Class Car
let userCar: Car;

let plate = <HTMLInputElement>document.getElementById("inputPlate");
let brand = <HTMLInputElement>document.getElementById("inputBranch");
let color = <HTMLInputElement>document.getElementById("inputColor");
let formCarId = <HTMLInputElement>document.getElementById("formCarId");

let errDiameter1 = <HTMLInputElement>document.getElementById("errDiameter1");
let errDiameter2 = <HTMLInputElement>document.getElementById("errDiameter2");
let errDiameter3 = <HTMLInputElement>document.getElementById("errDiameter3");
let errDiameter4 = <HTMLInputElement>document.getElementById("errDiameter4");
// error messages to the user through innerHTML
let errCarInput = <HTMLInputElement>document.getElementById("errCarInput");
let wheelsFormId = <HTMLInputElement>document.getElementById("wheelsFormId");
let errWheelFormId = <HTMLInputElement>document.getElementById("errWheelFormId");

let counterClicks: number = 0;
let wheelformValidate: boolean = false;


// Gather input from user and display ------------------------
function carFormSubmit() {

    //instance of Car class called userCar 
    userCar = new Car(plate.value, color.value, brand.value);

    if (plate.value && brand.value && color.value && validateNumPlate(plate.value)) {
        // here we send the data to the browser
        displayCarData();
        formCarId.classList.add("d-none");
        wheelsFormId.classList.remove("d-none");
        errCarInput.innerHTML = ""

    } else {
        let errCarInfo = <HTMLInputElement>document.getElementById('errCarInput');
        let errNumPlateId = <HTMLInputElement>document.getElementById('errNumPlate');

        let errNumPlate: string = "wrong number plate format";
        let errMissingCarInfo: string = "missing user input ";

        if (validateNumPlate(plate.value)) {
            errCarInfo.innerHTML = errMissingCarInfo
            errNumPlateId.innerHTML = "";

        } else {
            errNumPlateId.innerHTML = errNumPlate;
            errCarInfo.innerHTML = "";
        }
    }
}

// Gather input from user
function wheelFormSubmit() {

    for (var i = 1; i <= 4; i++) {
        var brandId = <HTMLInputElement>document.getElementById("idWheel" + i);
        var diameterId = <HTMLInputElement>document.getElementById("diameter" + i);
        //check for empty fields in form wheels
        checkWheelFormEmptyValues(brandId.value, diameterId.value);
        if (!wheelformValidate) {
            wheelformValidate = false;
            errWheelFormId.innerHTML = "please fill in form!";
            break;
        }
        //check diameter validation
        validateDiameterNumberValue(Number(diameterId.value));
        if (!wheelformValidate) {
            wheelformValidate = false;
            errWheelFormId.innerHTML = "Diameter must be between 0.4 and 4";
            break;
        }
    }
    // now I have to display the data after validation of empty fields and numbers validation
    for (var i = 1; i <= 4; i++) {
        var brandId = <HTMLInputElement>document.getElementById("idWheel" + i);
        var diameterId = <HTMLInputElement>document.getElementById("diameter" + i);

        if (brandId.value && diameterId.value && wheelformValidate) {
            const wheel2 = new Wheel(Number(diameterId.value), String(brandId.value));
            userCar.addWheel(wheel2); // we add wheels data diameter and brand name 
            wheelformValidate = true;
            errWheelFormId.innerHTML = ""
            wheelsFormId.classList.add("d-none");
        }
    }
    counterClicks++;
    // we send the wheel data to the browser.
    wheelformValidate ? displayWheelData() : false;
}

function empty(ObjClass: Car) {
    ObjClass.wheels.length = 0;
}

// display car data input
function displayCarData() {

    let dataInput = <HTMLInputElement>document.getElementById('carInfo');
    dataInput.innerHTML =
        "<table class='table-sm table-dark table-striped table-hover '>" +
        "<thead class=\"thead-dark\"><tr><th>Number Plate</th><th>Brand</th><th>color</th></tr></thead>" +
        " <tbody><tr>" +
        "<td>" + plate.value + "</td> " +
        "<td>" + brand.value + "</td>" +
        " <td>" + color.value + "</td></tr></tbody>" +
        "</table>";

}

function displayWheelData() {
    let contentTable: string = "";
    let dataWheels = <HTMLInputElement>document.getElementById("wheelInfo");

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

    console.log(dataWheels.innerHTML);
}

// validation number plate
function validateNumPlate(valData: any) {

    // reg expresion 4 numbers y 3 letters for the number plate.
    const regExp1 = /^\d{4}-?[a-z]{3}$/i;
    let varRegex = regExp1.test(valData);

    if (varRegex) {
        console.log("success", varRegex);
    } else {
        console.log("fail", varRegex);
    }
    return varRegex;
}


function validateDiameterNumberValue(diameterValue: number) {

    if ((diameterValue > 0.4) && (diameterValue < 4)) {
        return true;
    } else {
        wheelformValidate = false;
        return false;
    }



}

function checkWheelFormEmptyValues(brand: any, diameter: any) {

    if (brand != "" && diameter != "") {
        errWheelFormId.innerHTML = "";
        console.log("no empty fields");
        return wheelformValidate = true;

    } else {
        //send error message about empty fields
        errWheelFormId.innerHTML = "please fill in form!";
        return wheelformValidate = false;

    }
}