/* // Question 1
let number = 5
console.log("Q1. Number = " + number)

//Question 2
let hello = "hello"
console.log("Q2. String = " + hello)

//Question 3
let Num1 = 3, Num2 = 4;
console.log("Q3. Number1 =", Num1, "Number2 =", Num2)

//Question 4
let q4Hello = "Hello", q4Name = "sam"
console.log("Q4.", q4Hello, q4Name)

//Question 5
let q5Num1 = 2, q5Num2 = 3, q5Num3 = 5, result;
result = q5Num1 + q5Num2 +q5Num3;
console.log("Q5. Result =", result)

//Question 6
let q6Hello = "Hello", q6My = "My", q6Name = "name is Sam";
console.log(`Q6. ${q6Hello}, ${q6My} ${q6Name}`)

//Question 7
let myName = true; 
let isSam = false;
console.log("Q7.", typeof myName)

//Question 8
let q8There = "There are", q8People = "9 people in class";
console.log(`Q8. "${q8There} ${q8People}"`)

//Question 9
result = q4Name
console.log(result)
console.log("Q9. ", typeof result)

//Question 10
let num1 = 32,
    num2 = 8,
    num3 = 6;
    num4 = 1;
    num5 = 5; 
     
    sum = num1+num2/num3-num4
    console.log(sum)

    result2 = sum/num5
    console.log(result2)

    result3 = sum%num5
    console.log(result3)

    difference = num1 - num2
    console.log(difference)

    remainder = num1%num2
    console.log(remainder)

    //Question 12
    sum = sum + num1 
    sum += num1
    console.log(sum)

    sum = sum - num2
    sum -= num2
    console.log(sum)

    sum = sum * num3
    sum *= num3
    console.log(sum)

    sum = sum / num4
    sum /= num4
    console.log(sum)

    sum = sum % num5
    sum %= num5
    console.log(sum)

    //Question 13
    let input1 = prompt('Enter any number'); 
    result = number1 + number2
    console.log(result) */

    // exercise
    /* let number1 = parseInt(prompt("Enter number a"))
    let number2 = parseInt(prompt("Enter number b"))
    result = number1 + number2
    console.log(result) */

    /* let celsius = prompt("How's the weather outside? ")
    let fahrenheit = (celsius * 1.8) + 32
    console.log(`${celsius} is equal to ${fahrenheit}  degree fahrenheit`) */
    
    
    let message = "You are "
    let age = parseInt(prompt("How old are you?")) 

    /* if(ages >= 18)
    {
        message >= "+18"
    }
    else
    {
        message += "not old enough."
    } */

    message += age >= 18? "+18, have fun" : "not old enough.";

    console.log(message)

