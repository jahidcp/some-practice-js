// Let's a problem solve with fibo

let fibo = [0, 1];
for(let i = 2; i < 20; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);




// Quiz Problem Solving

var a = 5; 
var b = 8; 
var c = 4; 
var d = 6; 
var highest = Math.max(a, b, c, d);
console.log(highest);

let ty = Math.floor(13.67);
console.log(ty)

const number = -78; 
const answer = Math.abs(number); 
console.log(answer);

var a=2; 
var b=3; 
if(a === b){
	console.log("Hello");
}
else{
    console.log("None Value");
}

function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))