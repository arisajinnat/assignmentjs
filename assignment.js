
//Task 1 
function kilometerToMeter(km){
    km= km*1000;
    return km;


}
var display = kilometerToMeter(1);
console.log(display);






//Task 2

function budgetCalculator(watch,phone,laptop){
var watchPrice = 50;
var phonePrice = 100;
var laptopPrice = 500;
watch = watch* watchPrice;
phone = phone * phonePrice;
laptop = laptop * laptopPrice;
var total = watch + phone + laptop;
return total;
}

var check = budgetCalculator(2,1,1);
console.log(check);




//Task 3

var cost= 0;

function hotelCost(days){
if(days<=10){
     cost = days *100;
}
else if(days<=20){
    var firstcost= 10* 100;
    var remaining = days-10;
    var secondcost = remaining*80;
    cost= firstcost + secondcost;
}
else if (days>20){
    firstcost = 10*100;
     secondcost = 10*80;
     remaining = days - 20;
     var thirdcost = remaining*50;
     cost= firstcost + secondcost + thirdcost;
}
return cost;
}
var check = hotelCost(30); // driver cost
console.log(cost);




//Task 4

function megaFriend(names){;
   var mega = ''; // initial largest name
   names.map(function(str){ // map function checks all the elements of the array
    if(str.length > mega.length){
        mega = str;
    }
   })


return mega;
}
var check = ['james','Mini','Álexandar','Rabindranath']; //driver array
var check2 = megaFriend(check);
console.log(check2);
