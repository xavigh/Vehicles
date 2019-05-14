function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    var info = document.getElementById('carInfo');
    info.innerHTML = "Car Number Plate: " + car.plate
        + "</br> COLOR: " + car.color + "</br> BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}
function carFormSubmit(plate, brand, color) {
    var userCar = new Car(plate, brand, color);
    var numPlate = document.getElementById("inputPlate").innerText;
    console.log(numPlate);
}
