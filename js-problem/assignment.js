
const prompt = require("prompt-sync");

function kilometerToMeter(km){
    var input  = prompt("Type your distance in Kilometer:");
    km= input*1000;
    return km;


}
var display = kilometerToMeter(1);
console.log(display);
