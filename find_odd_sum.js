function getSumOfAnArray (numbers){
    let addSum = 0;
    for(let i = 0; i < numbers.length; i++){
        const getIndex = i;
        const getElement = numbers[getIndex];
        addSum = addSum + getElement;
        console.log(getIndex, getElement, addSum);
    }
    return addSum;

}

const someSum = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
getSumOfAnArray(someSum);

function getOddSumOfAnArray(numbers){
    let oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const oddIndex = i;
        const oddElement = numbers[oddIndex];
        if(oddIndex % 2 !== 0){
            console.log(oddIndex, oddElement);
            oddNumbers.push(oddElement);
        }
    }
    return oddNumbers;
}

const someOddAnArray = [13, 15, 17, 19, 21, 23, 25, 27];
const oddNumbers = getOddSumOfAnArray(someOddAnArray);
console.log(oddNumbers);
// getOddSumOfAnArray(someOddAnArray);

// 1 to 9 all number multiplication for factorial

function factorial (number){
    let getMulti = 1;
    for(let i = 1; i < number; i ++){
        getMulti = getMulti * i;
    }
    return getMulti;
}

const results = factorial(5);
console.log(results);

// reverse factorial



function inchToFeet(inch){
    var feet = inch/12; 
    return feet;
}

const totalInches = inchToFeet(60);
console.log(totalInches);

for( let i = 10; i >= 1; i--){
    console.log(i)
}

function print(a, b, c){
    return a+2;
    return a*b;
    return b*c+a;
  }
  console.log(print(1,2,3));