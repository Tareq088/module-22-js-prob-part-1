function leapYear(year){
    if(year%4 === 0){
        if(year%100 !==0){
           let output = year + "Yeah this is leap Year";
           return output;
        }
        else if (year%100 === 0 && year%400 ===0) {
            let output1 = year + " Yeah this is leap Year";
            return output1;
        }
        else{
            let output3 = year +" NO this is not leap year";
            return output3
        }
    }
    else{
        return false;
    }
}
let result = leapYear(1000);
let result1 = leapYear(2100);
let result2 = leapYear(2024);
let result3 = leapYear(2400);
let result4 = leapYear(2111);
console.log(result, result1, result2, result3, result4);