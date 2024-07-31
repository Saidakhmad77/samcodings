

/* 
const myEmptyArray = []  // This is an empty array
const myStringArray = ['Charmander', 'Bulbasaur','Squirtle']  // This array has string values
const myNumArray = [3, 45, 65, 12] // This array has number values
const myMixedArray = ['Sam', 33, 'Barry', 29]  // This array has mixed values
//reassinging values
myStringArray[2] = 'Wartorle'
// adding new values
myStringArray.push("Pikachu")
myStringArray.unshift("Caterpie", "Weddle")


console.log(myStringArray)  */


/* const numberArray = []
let userInput, 
		sum = 0, 
		message = "";

while (true)
{
	userInput= parseInt(prompt("Enter a number to add, type 'done' to exit"))
	if(!isNaN(userInput))
		numberArray.push(userInput)
	else //Lazy, if they enter ANYTHING that isn't a number exit the loop
	{
		break
	}
}
for(i = 0; i < numberArray.length; i++)
{
	sum += numberArray[i]
}
message = numberArray.join(' + ')
console.log(message, "=", sum) */


/* const students = []

const student = {
    fname: "Tarn",
    lname: "Montgomery",
    age: 33,
    score: 98,
    fullname: () => {return this.fname+" "+this.lname}
}
console.log(student) */


//// Q1

/* const numArray = [1,2,4,5,9]

numArray.push(10);

numArray.shift()

let sum = numArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all numbers in the array:", sum); */


//// Q2

/* const numbers = [7, 24, 45, 23, 44, 68, 34, 78, 93, 99]
const map1 = numbers.map((x) => x * 2);

function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

let evenNumbers = getEvenNumbers(numbers);

console.log(evenNumbers, map1) */


//// Q3
/* 
// Array of strings
let fruits = ['apple', 'banana', 'orange', 'grape', 'strawberry'];
fruits.sort().reverse()


// Output the array
console.log(fruits);  */


//// Q4

/* const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log("Grid:");
for (let i = 0; i < grid.length; i++) {
    console.log(grid[i]);
}

// Step 3: Calculate the sum of all elements in the grid
let sum = 0;
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        sum += grid[i][j];
    }
}
console.log("Sum of all elements:", sum); */

//// Q5

/* const myObject = {
    name: "Harry Potter",
    author: "J.K.Rowling",
    year: "1997"
}

console.log("My favorite book is", myObject) */

//// Q6
/* 
let person = {
    fname: "Sam",
    lname: "Potter",

    greet: function() {
        console.log("Hello, " +this.fname + " " +this.lname + "!");
    }
}   

person.greet(); */

//// Q7 