
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


function validateDiameterNumberValue(diameterValue: number):boolean {

    if ((diameterValue > 0.4) && (diameterValue < 4)) {
        return true;
    } else {
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


function empty(ObjClass: Car) {
    ObjClass.wheels.length = 0;
}