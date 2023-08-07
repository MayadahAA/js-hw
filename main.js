// Calculate area of a rectangle
let length = 14
let width = 18
let result = length * width
console.log("The area of the rectangle is: " + result);
// output:
// The area of the rectangle is: 252


// The Temperature Converter
let C = 25
let F = C * 1.8000 + 32
console.log(C +"°C" + " is " + F + "°F" );
// output:
// 25°C is 77°F

let F1 = F
let C1 = (F1 - 32) / 1.8000
console.log(F1 +"°F" + " is " + C1 + "°C" );
// output:
// 77°F is 25°C

// Convert hours to seconds
let h = 2
let sec = h * 3600
console.log(h + " hours = " + sec + " sec");
// output:
// 2 hours = 7200 sec

// Leap year
let year = 2023
if ((year % 4 == 0) && (year % 100 != 0 || year % 400 != 0)) {
    console.log(year + " is leap year");
    
} else if ((year % 4 == 0) && (year % 100 == 0 && year % 400 == 0)){
    console.log (year + " is leap year")
}
else{
    console.log(year + " is not leap year");
}
// output
// 2023 is not leap year


// Find the a number is present in given range
let x = 15
if (x >= 11 && x <= 30) {
    console.log(x + " is in range");
}else{
    console.log(x + " is out of range");
}
// output
// 15 is in range

// Factorial numbers
let Fnum = 5
let number = 1
let s = ""
for (let i = 1; i <= Fnum; i++) {
    number *= i
    s += i + " x "
}        
console.log("the factorial of " + Fnum + " is " + s + " = " + number);
// output
// the factorial of 5 is 1 x 2 x 3 x 4 x 5 x  = 120