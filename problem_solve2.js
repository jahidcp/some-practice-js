const jim = 84;
const dela = 75;

if(jim > dela){
    console.log("Jim, You will receive the Cake.")
}
else{
    console.log("Dela, You will receive the cake.")
}

const jims = 84;
const Delas = 99;
const Chinku = 77;

if(jims>Delas&&jims>Chinku){
    console.log("Jim, You will get the Cake.")
}

else if(Delas > jims && Delas > Chinku){
    console.log("Dela, You will get the Cake.")
}

else{
    console.log("Chinku, You will get the Cake.")
}

// find a max value function way solve

function getTheValue(number1, number2, number3){
    let getMaxValue = Math.max(number1, number2, number3);
    return getMaxValue;
}
let num1 = 75; 
let num2 = 85;
let num3 = 95;

let findMaxValue = getTheValue(num1, num2, num3);
console.log(findMaxValue);

// find a min value function way solve

function getTheValues(value1, value2, value3){
    let getMinValue = Math.min(value1, value2, value3);
    return getMinValue;
}

let getMin1 = 65;
let getMin2 = 55;
let getMin3 = 45;

let findMinValue = getTheValues(getMin1, getMin2, getMin3);
console.log(findMinValue);