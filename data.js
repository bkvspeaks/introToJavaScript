//Data types
/*
let yourAge = 18; //number
let yourName = 'Bob'; //string
let namez = {first: 'Jane', last: 'Doe'}; //object (dictionary in Python)

console.log(yourAge);
console.log(yourName);
console.log(namez);

let truth = false; //boolean
let groceries = ['apple', 'orange', 'pear']; //array (list/tuple in Python)

console.log(truth);
console.log(groceries);

let random; //undefined
let nothing = null; //null

console.log(random);
console.log(nothing);


//String methods
let fruit = 'banana';
let moreFruits = 'banana\napple'; //new line
let stillMoreFruits = 'banana,apple,rutabega'; //new line
let groceries = ['apple', 'orange', 'pear'];
console.log(moreFruits);
console.log(fruit.length); //shows length of the string - returns 6 
console.log(fruit.indexOf('an')); //shows if the characters 'an' are in the variable string value fruit (banana) //returns 1
console.log(fruit.indexOf('ban')); //shows if the characters 'ban' are in the variable string value fruit (banana) //returns 0
console.log(fruit.indexOf('nan')); //shows if the characters 'nan' are in the variable string value fruit (banana) //returns 2
console.log(fruit.indexOf('bil')); //shows if the characters 'bil' are in the variable string value fruit (banana) //returns -1

//slicing
console.log(fruit.slice(2,6)); //includes index 2 up to index 6

//other methods
console.log(fruit.replace('ban', '123')); //returns 123ana - doesn't modify the variable directly; only what goes to console this time
console.log(fruit) //returns banana
console.log(fruit.toUpperCase('nan')); //returns BANANA
console.log(fruit)//returns banana
console.log(fruit.toUpperCase()); //returns BANANA
console.log(fruit)//returns banana

console.log(fruit.charAt(2));//returns n
console.log(fruit[2]); //returns n

console.log(fruit.split('')); // returns Array(6) [ "b", "a", "n", "a", "n", "a" ]
console.log(fruit.split(',')); // returns Array [ "banana" ]
console.log(stillMoreFruits.split(',')); // returns Array(3) [ "banana", "apple", "rutabega" ]
//console.log(groceries.split(',')); // returns Uncaught TypeError: groceries.split is not a function - groceries is an array

*/

//Arrays
//let fruits = ['banana', 'apple', 'orange', 'pineapple'];
//let sameFruits = new Array ('banana', 'apple,', 'orange', 'pineapple');
/*
console.log(fruits); //access the array - returns Array(4) [ "banana", "apple,", "orange", "pineapple" ]
console.log(fruits[2]); //access value at index 2 (orange)
fruits[0] = 'pear';
console.log(fruits); //returns Array(4) [ "pear", "apple,", "orange", "pineapple" ]


for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}


//Array methods - //https://www.w3schools.com/js/js_array_methods.asp
//toString
console.log(typeof fruits);
console.log('to String', fruits.toString());
let fruitString = fruits.toString();
console.log(typeof fruits);
console.log(fruits);
console.log(typeof fruitString);
console.log (fruitString);

//join
console.log(fruits.join(' - '));
console.log (fruits);

//pop
let fruits = ['banana', 'apple', 'orange', 'pineapple'];
console.log ( fruits.pop(), fruits); //removes the last item from the array

//push
console.log(fruits, fruits.push('strawberries'), fruits); //appends an item to the end of the array

console.log(fruits[4]);//should return undefined
fruits[4] = 'watermelon';
console.log(fruits[4]); //should show watermelon at the end
console.log(fruits);

fruits[fruits.length] = 'kiwi'; //same as the push method
console.log(fruits);

//shift/unshift
console.log(fruits);
fruits.shift(); //removes FIRST item in Array  - pop removes LAST item
console.log(fruits);

fruits.unshift('tomato');//inserts an item in the first position - push inserts as the last item
console.log(fruits);

let vegetables = ['potatoes', 'onions','carrots'];
console.log ('fruits:' , fruits);
let allGroceries = fruits.concat(vegetables);
console.log ('veggies:' , vegetables);
console.log('grocery list:', allGroceries);
console.log ('fruits:' , fruits);
console.log ('veggies:' , vegetables);

//slice
console.log(allGroceries.slice(1,4)); //start at item 1 up to item 4

//reverse
console.log(allGroceries);
console.log(allGroceries.reverse());
*/

let someNums = [ 5,72,83,4,63,255];
//console.log(someNums);
//console.log(someNums.sort());
//console.log(someNums.sort(function(a,b){return a-b}));
//console.log('fixed numbers:' , someNums);
//let sorted = someNums.sort();
//console.log('numbers:' , someNums);
//console.log('sorted numbers: ', sorted);
//console.log('numbers:' , someNums);

//adding things to array
let emptyArray = new Array ();
for (let num = 0; num <10; num++) {
    emptyArray.push(num);
}

//console.log(emptyArray);

//Objects
let student = {
    first: 'Brian', 
    last: 'Vagnini', 
    age: 51, 
    height: 70, //the comma isn't required, but is a good practice
    studentInfo: function (){
        return this.first + '\n' + this.last;
    }
};
//console.log(student.first); //displays Brian
//console.log(student[first]); // Uncaught ReferenceError: first is not defined - deprecated feature?
//console.log(student);

student.first = 'BillyJoe'; //change an object value
//console.log(student);

console.log(student.studentInfo());

//Conditionals
//18-35 is the demographic
var age = 45;
//var age = prompt('What is your age? '); //in Firefox, the prompt works, but doesn't display the text asking the question
if ( (age >= 18) &&(age<=35) ) {
    let status = 'target demo';
    console.log(status);
} else {
    let status = 'not my audience';
    console.log(status);
}

//Switch
//differentiate between weekday and weekend
//day 0 - Sun  day 6 - Sat  day 4 - Thu
switch (2) { // the number in here sets which condition is tested
    case 0: //0, 5, or 6 result in weekend - all others result in weekday(the default)
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;

    default:
        text = 'weekday';
}

console.log(text);


