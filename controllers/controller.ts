let userCar = Car;



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


    let userCar = new Car(plate.value, color.value, brand.value);



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



    for (var i = 0; i <= 4; i++) {
        let brandIdELe = <HTMLInputElement>document.getElementById("idWheel" + i);
        let diameterIdEle = <HTMLInputElement>document.getElementById("diameter" + i);

        console.log(brandIdELe, diameterIdEle);
    }


}
