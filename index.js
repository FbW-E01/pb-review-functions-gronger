console.log("------------------   Q1  --------------------------------------");

// 1. Write a normal function that takes in two numbers and *returns* the sum of those numbers.

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 30));

console.log("------------------------- Q2  ------------------------------");


// 2. Write a normal function that takes in a string and *returns* that string capitalized.

function capitalised(myString) {
    return myString.toUpperCase();
}

console.log(capitalised("hellloooo does this work"));

console.log("------------------------- Q3 ----------------------------");


// 3. Write a normal function that takes in an array and *returns* the last item in that array.

function lastItemInArray(myArray) {
    return myArray[myArray.length - 1];
}

const fishArray = ["Minnow", "Salmon", "Octopus", "Forelle", "Kabeljau"];

console.log(lastItemInArray(fishArray));

console.log("-------------------------  Q4 -------------------------------");


// 4. Write an arrow function that takes in an array and *returns* the first item in that array.


const firstItem = myArray => myArray[0];

console.log(firstItem(fishArray));

console.log("---------------------------  Q5  -----------------------------");

// 5. Write an arrow function that takes in a string and *returns* the last three characters of that string.

const lovelyString = "string";

const lastThreeChars = myString => myString.slice(3);

console.log(lastThreeChars(lovelyString));


console.log("----------------------------  Q6  ----------------------------");


// 6. Write an arrow function that takes in an array and *returns* the type of the first item in that array.


const firstItemInArray = myArray => typeof myArray[0];

console.log(firstItemInArray(fishArray));



console.log("-----------------------  Q7  ---------------------------------");


// 7. Write an arrow function that takes in an array and *returns* true, if all items in that array have the same type.


const sameTypeOrNot = myArray => {
     for (let i; i < myArray.length; i++) {
        if (typeof myArray[i] === typeof myArray[i]) {
            return true;
        }
    }
}

const allSame = ["fish", "chicken", "lamb"];
const notSame = ["tomato", 44, "lemon"];

console.log(sameTypeOrNot(allSame));
console.log(sameTypeOrNot(notSame));

// WRONGGGGGGGGGGGG... why doesnt it work ??

console.log("----------------------  Q8  ----------------------------------");

// 8. Print the `type` of a variable that has a normal function value.

const sumNumber = sum(100, 55);

console.log(typeof sumNumber);
console.log(typeof sum);


// whch of these was i supposed to do ??????????? :S

console.log("------------------------  Q9 --------------------------------");

// 9. Print the `type` of a variable that has an arrow function value.

const firstItemStored = firstItemInArray(fishArray);
console.log(typeof firstItemStored);

console.log(typeof firstItemInArray);

// idk which of these iwas meant to do ? or was it smth else ? :S

console.log("------------------------ Q10 --------------------------------");

// 10. Write and test a function that takes in two parameters (min and max). That function should return another function that doesn't take in any parameters, but returns a random number between min and max. Effectively your "outer" function is a factory that creates customized random number generator functions.

function minAndMax(min, max) {
    let = randomNum = Math.round(Math.random());

    function something() {
        return minAndMax(Math.random());
    }    
}

console.log(minAndMax(2, 10));


console.log("------------------------  Q11 --------------------------------");

// 11. In your own words, explain what are side effects and what is a pure function.

/* 
A pure function only affects the data it intends to. There are no side effects.

Side effects are unintentional alterations to other data in the code through an "impure" function
....... I think???

*/


console.log("---------------------------  Q12  -----------------------------");

// 12. In your own words, explain what is the difference between functions and methods.

/*

Methods work with objects, and functions arem ore commonly used with other data types

*/


