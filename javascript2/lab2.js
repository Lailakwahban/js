//LAB2///////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
/*const n = prompt("Enter your name (only characters):");
const pnum = prompt("Enter your phone number (8 digits):");
const mnum = prompt("Enter your mobile number (11 digits starting with 010, 011, or 012):");
const email = prompt("Enter your email:");

if (!/^[a-zA-Z\s]+$/.test(n)) {
    console.error("Invalid Name! Please enter characters only.");
} else if (!/^\d{8}$/.test(pnum)) {
    console.error("Invalid Phone Number! It should be 8 digits.");
} else if (!/^(010|011|012)\d{8}$/.test(mnum)) {
    console.error("Invalid Mobile Number! It should be 11 digits and start with 010, 011, or 012.");
} else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    console.error("Invalid Email! Please provide a valid email format (e.g., abc@123.com).");
}*/

/*let nameFormat = /^[A-Za-z\s]+$/ig;
do {
    var name = prompt("Enter your name:");
} while (!name.match(nameFormat));
console.log(`Name: ${name}`);

let phoneFormat = /^\d{8}$/;
do {
    var pnum = prompt("Enter your phone number (8 digits):");
} while (!pnum.match(phoneFormat));
console.log(`Phone Number: ${pnum}`);

let mobileFormat = /^(010|011|012)\d{8}$/;
do {
    var mobNum = prompt("Enter your mobile number (11 digits):");
} while (!mobNum.match(mobileFormat));
console.log(`Mobile Number: ${mobNum}`);
let emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
do {
    var email = prompt("Enter your email:");
} while (!email.match(emailFormat));
console.log(`Email: ${email}`);

let colorFormat = /^(red|green|blue)$/i;
do {
    var color = prompt("Choose a color for the welcome message (red, green, or blue):").toLowerCase();
} while (!color.match(colorFormat));
const colorStyles = {
    red: "color: red",
    green: "color: green",
    blue: "color: blue"
};

console.log(`%cWelcome, ${name}!`, colorStyles[color]);
console.log(`%cYour information:\nPhone Number: ${pnum}\nMobile Number: ${mobNum}\nEmail: ${email}`, colorStyles[color]);*/



////2
function findLargestWord(inputString) {
   
    let wordsArray = inputString.split(" ");//to split it into words
    
   
    let largestWord = "";
    let maxLength = 0;

    
    for (let i = 0; i < wordsArray.length; i++) {
       
        if (wordsArray[i].length > maxLength) {
            largestWord = wordsArray[i];
            maxLength = wordsArray[i].length; 
        }
    }
    
   
    return largestWord;
}


const input = "this is a javascript string demo";
console.log(`The largest word is: ${findLargestWord(input)}`);


///3

/*
let values = [];


for (let i = 0; i < 5; i++) {
    let userInput = parseInt(prompt(`Enter value ${i + 1}:`, ""));
    values.push(userInput);
}


let inputString = `You've entered the values: ${values.join(", ")}`;
console.log(inputString);


let descending = values.sort((a, b) => b - a);
let descendingString = `Values sorted in descending order: ${descending.join(", ")}`;
console.log(descendingString);


let ascending = values.sort((a, b) => a - b);
let ascendingString = `Values sorted in ascending order: ${ascending.join(", ")}`;
console.log(ascendingString);


document.write(`<h1>Sorting</h1>`);
document.write(`<p>${inputString}</p>`);
document.write(`<p>${descendingString}</p>`);
document.write(`<p>${ascendingString}</p>`);
*/

/////4/////
let radius = prompt("What is the value of your circle's radius?", "Type radius Here");


radius = parseFloat(radius);


if (!isNaN(radius) && radius > 0) {
   
    let area = Math.PI * Math.pow(radius, 2);

   
    alert(`Total area of the circle is ${area}`);
} else {
  
    alert("Please enter a valid positive number for the radius.");
}
////square root
let number = prompt("Enter a number to calculate its square root:", "Type number here");


number = parseFloat(number);


if (!isNaN(number) && number >= 0) {
 
    let squareRoot = Math.sqrt(number);


    alert(`The square root of ${number} is ${squareRoot}`);
} else {
    
    alert("Please enter a valid number.");
}

let angleInDegrees = prompt("Enter an angle (in degrees) to calculate its cosine value:");

if (angleInDegrees !== null && !isNaN(angleInDegrees)) {
  let angleInRadians = (Number(angleInDegrees) * Math.PI) / 180; 
  let cosValue = Math.cos(angleInRadians);

  alert(`The cosine value is: ${cosValue.toFixed(4)}`);
} 

//horizontal fragments//