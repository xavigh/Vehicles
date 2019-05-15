let userCar = Car;

let plate = <HTMLInputElement>document.getElementById("inputPlate");
let brand = <HTMLInputElement>document.getElementById("inputBranch");
let color = <HTMLInputElement>document.getElementById("inputColor");
    
           

function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT"));
    var info:any = document.getElementById('carInfo');
    
    
    info.innerHTML = "Car Number Plate: " + car.plate
        + "</br> COLOR: " + car.color + "</br> BRAND: " + brand
        + " WHEELS: " + JSON.stringify(car.wheels);
}

// Gather input from user and display
function carFormSubmit(){      
   
    
    let userCar = new Car(plate.value, color.value, brand.value); 
    


    if(plate.value && brand.value && color.value) {            
       
        // here we send the data to the browser
        console.log("num plate is "+ plate.value + "<br>"); 
        console.log("made of car is "+ brand.value); 
        console.log("Color is "+ color.value); 
    } 
    else{
        let data = <HTMLInputElement>document.getElementById('carInfo');
        data.innerHTML ="missing data"; 
        console.log("missing");
    }
}

// display car data input
function displayCarData(){
    // we send the input data to the browser
   
    let dataInput = <HTMLInputElement>document.getElementById('carInfo');
    dataInput.innerHTML ="num plate is "+ plate.value + "<br>"
                             +"Brand is " + brand.value + "<br>"
                                         + "color is "+ color.value;

}

// Gather input from user
function wheelFormSubmit(){

}
