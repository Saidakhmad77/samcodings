// Q1

/* let numberInput = parseInt(prompt("Enter a number."))

if(numberInput > 0)
{
    console.log("Num is Positive")
}
else
{
    console.log("Num is negative") 
}    */

// Q2

/* let numberInput = parseInt(prompt("Enter a number."))

if(numberInput % 2 === 0)
    {
        console.log("Num is Even")
    }
    else
    {
        console.log("Num is Odd") 
    } */

// Q3

/* let num1 = parseInt(prompt("Enter number a"))
let num2 = parseInt(prompt("Enter number b"))
if (num1 > num2)
{
    console.log(`${num1} is greater than ${num2}.`);
} else if (num1 < num2) {
    console.log(`${num2} is greater than ${num1}.`);
} else {
    console.log("Both numbers are equal.");
} */

// Q4

/* let numInput = parseInt(prompt("Enter a number"))
if (numInput >= 10 && numInput <= 20)
{
    console.log("Number is between 10~20")
}
else
{
    console.log("Number is not between")
} */


// Q5

/* let percentage = parseInt(prompt("Enter a percentage score"))
if (percentage >= 90)
{
    console.log("A")
}
 else if (percentage >= 80) {
    console.log("B")
} else if (percentage >= 70) {
    console.log("C")
} else if (percentage >= 60) {
    console.log("D")
}
 else {
    console.log("F")
} */


// Q6

/* let age = parseInt(prompt("Enter your age"))
let isStudent = confirm("Are you a student")
if (age <= 18 || isStudent)
{
    console.log("Discount applied")
}
else
{
    console.log("Discount is not applied")
} */


// Q7

/* let age = parseInt(prompt("Enter your age"))

if (age >= 18 )
{
    console.log("Eligible for driving")
}
else
{
    console.log("Not eligible")
} */

// Q8
/* 
let quantity = parseInt(prompt("Enter the quantity of the product:"));

let hasCoupon = confirm("Do you have a coupon?");
//let couponApplied = (hasCoupon === 'true');

let pricePerUnit = 10;
let totalCost;

if (quantity > 10 && hasCoupon) 
    {
    let discountedPrice = pricePerUnit * 0.9;
    totalCost = quantity * discountedPrice;
    }
 else 
    {
    totalCost = quantity * pricePerUnit;
    }

console.log(`Total cost: $${totalCost.toFixed(2)}`);  */


// Q9

 //Regex!!!!!! which I dont understand
/* 
let validity = parseInt(prompt("Enter a password"))
 */


// Q10

/* let incomeInf = parseInt(prompt("Enter your income"))
let  creditScore = parseInt(prompt("Enter your credit score"))
 
if(incomeInf > 5000 && creditScore > 700)
 {
    console.log("You can loan")
 }
 else
 {
    console.log("You can't loan")
 }
 */

// Q11








/* // exercise

// exercise 1
let userAge = parseInt(prompt("Please enter your age:"));

if (!isNaN(userAge)) {
    const\ yearsRemaining = 90 - userAge;
    let daysLeft = yearsRemaining * 365;
    let weeksLeft = yearsRemaining * 52;
    let monthsLeft = yearsRemaining * 12;

    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left until you turn 90.`);
} else {
    console.log("Invalid input. Please enter a valid age.");
} */

// exercise 2

/* let weather = prompt("How's the weather outside?")

if (weather === "sunny") 
{
    console.log("Have a nice day!");
} 
else 
{
    console.log("Stay at home.");
}
 */

// exercise 3

/* let weight = parseInt(prompt("What is your weight?"))
let height = parseInt(prompt("What is your height?"))
let BMI = weight / (height * 2)

if(BMI <= 18.4) {
    console.log("underweight")
}
else if(18.5 < BMI <24.9){
    console.log("normal")
}
else if(25 < BMI <39.9){
    console.log("overweight")
}
else(BMI > 40) 
{
    console.log("obese")
}
 */