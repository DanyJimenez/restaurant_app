"use strict"


let meal;
let percentTaxes;
let percentTips;

meal= prompt("How much did the meal cost? ");
percentTaxes = prompt("What was the tax percentage?");
percentTips = prompt("What was the percentage of tips?");



var point = percentTaxes;
function erase(point){
    var toPercent = point.replace("%","");
    toPercent = toPercent/100;
    return toPercent;
}

var impuestos = erase(point);



var punto = percentTips;
function borrar(punto){
    var aPorCiento = punto.replace("%","");
    aPorCiento = aPorCiento/100;
    return aPorCiento;
}

var propinas = borrar(punto);
 


function totalCoastMeal (meal, impuestos , propinas, total){
    var taxes = (meal * impuestos);
    var tips = (meal * propinas);
    var totalMeal = (parseInt(meal) +parseInt(tips) + parseInt(taxes));
    total(totalMeal);
}
totalCoastMeal(meal, impuestos, propinas, function(answer){
    alert("The total cost of the meal ($"+ meal+ "), including taxes ("+percentTaxes+") and service ("+percentTips+"), is: " + "$" + answer);
})



//parseInt transforma strings a numeros