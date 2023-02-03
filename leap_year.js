function isLeapYear (year){
    const leapReminder = year % 4;
    if(leapReminder === 0){
        console.log("This is a Leap Year". year);
    }
    else{
        console.log("This is not a leap year", year);
    }
}

isLeapYear(1920);

function isLeapYear (year){
    const reminder = year % 4;
    if(reminder == 0){
        return true;
    }
    else{
        return false;
    }
}

const isMyYearIsLeapYear = isLeapYear(2020);
console.log("My Year is a Leap Year for my best Luck.", isMyYearIsLeapYear);

const wasMyYearIsLeapYear = isLeapYear(1960);
console.log("My Year was my past Year.", wasMyYearIsLeapYear)