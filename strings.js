//String methods
let breakfast = 'banana';
let moreFruits = 'banana\napple'; //new line
let stillMoreFruits = 'banana,apple,rutabega'; //new line

console.log(moreFruits);
console.log(breakfast.length); //shows length of the string - returns 6 
console.log(breakfast.indexOf('an')); //shows if the characters 'an' are in the variable string value fruit (banana) //returns 1

//slicing
console.log(breakfast.slice(2,6)); //includes index 2 up to index 6

//other methods
console.log(breakfast.replace('ban', '123')); //returns 123ana - doesn't modify the variable directly; only what goes to console this time
console.log(breakfast) //returns banana
console.log(breakfast.toUpperCase('nan')); //returns BANANA
console.log(breakfast)//returns banana
console.log(breakfast.toUpperCase()); //returns BANANA
console.log(breakfast)//returns banana

console.log(breakfast.charAt(2));//returns n
console.log(breakfast[2]); //returns n

console.log(breakfast.split('')); // returns Array(6) [ "b", "a", "n", "a", "n", "a" ]
console.log(breakfast.split(',')); // returns Array [ "banana" ]
console.log(stillMoreFruits.split(',')); // returns Array(3) [ "banana", "apple", "rutabega" ]
