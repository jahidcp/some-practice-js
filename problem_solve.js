function inchToFeat(inches){
    const myHeight = inches / 12;
    return myHeight;
}

const height = 72;
const myTotalHeight = inchToFeat(height);
console.log(myTotalHeight);

// Kilometer to mille

function myDistanceKMToML(miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}

const totalKilometer = 12;
const totalKilometerDistance = myDistanceKMToML(totalKilometer);
console.log(totalKilometerDistance);

//  odd and even check

function isEven(number){
    const reminder = number % 2;
    // console.log(reminder);
    if(reminder === 0){
        console.log("This is Number is odd")
    }
    else{
        console.log("This is number is even")
    }
}

isEven(200);
isEven(9);

function numberEven(num){
    const reminders = num % 2;
    if(reminders === 0){
        return true;
    }
    else{
        return false;
    }
}

const isNumberEven = numberEven(8);
console.log(isNumberEven);

const wasNumberOdd = numberEven(13);
console.log(wasNumberOdd);



// problem Solve

function bar(){
    console.log("Bar Function")
}

function foo(){
    console.log("Foo Function")
    bar();
}
foo();