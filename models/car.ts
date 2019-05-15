class Car{
    plate:string;
    color:string;
    brand:string;
    wheels:Wheel[]=new Array();
    
    // constructor takes care of creating the car through an instance of Car Class.
    constructor(plate:string,color:string,brand:string){
        this.plate=plate;
        this.color=color;
        this.brand=brand;
    }
    
    addWheel(wheel:Wheel):void{
        this.wheels.push(wheel);

        
    }

}