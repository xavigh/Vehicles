
let userCar:Car;

// testing
function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    var info: any = document.getElementById('carInfo');

    info.innerHTML = "Car Number Plate: " + car.plate
        + "</br> COLOR: " + car.color + "</br> BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}

// Gather input from user and display
function carFormSubmit() {
    let plate = <HTMLInputElement>document.getElementById("inputPlate");
    let brand = <HTMLInputElement>document.getElementById("inputBranch");
    let color = <HTMLInputElement>document.getElementById("inputColor");


     userCar = new Car(plate.value, color.value, brand.value);
    if (plate.value && brand.value && color.value) {
        // here we send the data to the browser
        displayCarData();

        console.log("num plate is " + plate.value + "<br>");
        console.log("made of car is " + brand.value);
        console.log("Color is " + color.value);
    }
    else {
        let data = <HTMLInputElement>document.getElementById('carInfo');
        data.innerHTML = "missing data";
        console.log("missing");
    }
}

// display car data input
function displayCarData() {

    // we send the input data to the browser
    let plate = <HTMLInputElement>document.getElementById("inputPlate");
    let brand = <HTMLInputElement>document.getElementById("inputBranch");
    let color = <HTMLInputElement>document.getElementById("inputColor");

    let dataInput = <HTMLInputElement>document.getElementById('carInfo');
    dataInput.innerHTML = "num plate is " + plate.value + "<br>"
        + "Brand is " + brand.value + "<br>"
        + "color is " + color.value;

}

// Gather input from user
function wheelFormSubmit() {
    let dataWheels = <HTMLInputElement>document.getElementById("wheelInfo");
        // **** error en .value from HTMLinputElement
    for (var i = 1; i <= 4; i++) {
        let brandId = <HTMLInputElement>document.getElementById("idWheel" + i);
        let diameterId = <HTMLInputElement>document.getElementById("diameter" + i);
        //we send the data of the wheels in html format
        // cast diameterId value to a number
        const wheel2= new Wheel(Number(diameterId.value), String(brandId.value) );

        userCar.addWheel(wheel2);
       
       
       
    }
    console.log(userCar);
    console.log(userCar.wheels);
    // concatenar resultados
    //dataWheels.innerHTML = brandId.value + diameterId.value;

}
