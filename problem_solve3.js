function highestHigher(numbers){
    // console.log("Inside the result in this highest height: ", numbers);
    let largestHeight = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element > largestHeight){
            largestHeight=element;
        }
    }
    return largestHeight;
}

let number = [167, 190, 120, 165, 137, 2549];
let highestTallest = highestHigher(number);
console.log("Tallest Person is: ", highestTallest);

function lowestLower(number2){
    let lowestHeight = number2[0];
    for(let i = 0; i < number2.length; i++){
        const index2 = i;
        const element2 = index2[number2];
        if(element2 < lowestHeight){
            lowestHeight=element2;
        }
    }
    return lowestHeight;
}

var number3 = [2458, 5894, 4936, 3496, 1974];
var lowestLow = lowestLower(number3);
console.log(lowestLow);