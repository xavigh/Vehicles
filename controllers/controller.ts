
//instantiate Class Car
let userCar: Car;

let plate      = <HTMLInputElement>document.getElementById("inputPlate");
let brand      = <HTMLInputElement>document.getElementById("inputBranch");
let color      = <HTMLInputElement>document.getElementById("inputColor");

// Only for testing
function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    var info: any = document.getElementById('carInfo');

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

    } else {
        let data = <HTMLInputElement>document.getElementById('carInfo');
        data.innerHTML = "missing user input";
        console.log(data.innerHTML);
    }
}


// Gather input from user
function wheelFormSubmit() {
   
    // **** error en .value from HTMLinputElement
    for (var i = 1; i <= 4; i++) {

        let brandId = <HTMLInputElement>document.getElementById("idWheel" + i);
        let diameterId = <HTMLInputElement>document.getElementById("diameter" + i);
        //we send the data of the wheels in html format
        // cast diameterId value to a number
        const wheel2 = new Wheel(Number(diameterId.value), String(brandId.value));

        userCar.addWheel(wheel2); // we add wheels data diameter and brand name
        

    }

  
    console.log(userCar);
    console.log(userCar.wheels);

    console.log("Json stringify =", JSON.stringify(userCar.wheels));
    var buttonClick: boolean = true;
    //empty array wheels just in case user clicks again the submit button.
    if (buttonClick) empty(); 
    console.log("Json stringify =", JSON.stringify(userCar.wheels));
    // concatenar resultados
    //dataWheels.innerHTML = brandId.value + diameterId.value;

}

function empty(): void {
    userCar.wheels.length = 0;
}

// display car data input
function displayCarData() {

    let dataInput = <HTMLInputElement>document.getElementById('carInfo');
    dataInput.innerHTML = "num plate is " + plate.value + "<br>"
        + "Brand is " + brand.value + "<br>"
        + "color is " + color.value;   
}

function displayWheelData(){    
    
    let dataWheels = document.getElementById("wheelInfo");
    

}





