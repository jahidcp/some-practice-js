// math and pow function
const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;

// abs function
const gap = Math.abs(num1 - num2);
console.log(gap);

if(gap < 5){
    console.log("You are the best friend.");
}
else{
    console.log("You are stay apart.");
}

// round function
const number = 3.5;
const fullNumber = Math.round(number);
console.log(fullNumber);

// ceil function

const result2 = Math.ceil(5.000001);
console.log(result2);

// floor function

const result3 = Math.floor(457.500001);
console.log(result3);

// random function

const result4 = Math.random();
console.log(result4);

const result5 = Math.random()*100;
console.log(result5);

const result6 = Math.round(Math.random()*100);
console.log(result6);

// for loop use in  random function (it's function use Ludo game)

for(var i=0; i <= 20; i++){
    var result20 = Math.round(Math.random()*6);
    console.log(result20);
}

const result7 = Math.PI;
console.log(result7);