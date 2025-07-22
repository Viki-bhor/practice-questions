function leapYearOrNot(year) {
    
    if(year % 4 === 0) {
        return "The year is leap year."
    } else {
        return "the year is not leap year."
    }
}

console.log(leapYearOrNot(2005));
