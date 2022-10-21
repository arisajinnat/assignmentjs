/*var num1 = 1;
var num2=10;
var num3=20;
var result= Math.max(num1,num2,num3);
console.log("The larger number is ",result);
/*var randomNum= 100 + Math.random(num)*100;
var round= Math.round(randomNum);
console.log(round);*/

var marks =[89,85,96,94,33,45];
var min= marks[0];
for(i=0;i<=marks.length;i++){
    var element = marks[i];
    if(element<min)
    min=element;

}
console.log(min);

