//Arrays

let groceries = ['apple', 'orange', 'pear'];

//console.log(groceries.split(',')); // returns Uncaught TypeError: groceries.split is not a function - groceries is an array

let fruits = ['banana', 'apple', 'orange', 'pineapple'];
let sameFruits = new Array ('banana', 'apple,', 'orange', 'pineapple');

console.log(fruits); //access the array - returns Array(4) [ "banana", "apple,", "orange", "pineapple" ]
console.log(fruits[2]); //access value at index 2 (orange)
fruits[0] = 'pear';
console.log(fruits); //returns Array(4) [ "pear", "apple,", "orange", "pineapple" ]


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
//let fruits = ['banana', 'apple', 'orange', 'pineapple'];
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


let someNums = [ 5,72,83,4,63,255];
console.log(someNums);
console.log(someNums.sort());
console.log(someNums.sort(function(a,b){return a-b}));
console.log('fixed numbers:' , someNums);
let sorted = someNums.sort();
console.log('numbers:' , someNums);
console.log('sorted numbers: ', sorted);
console.log('numbers:' , someNums);


//Looping through an array
for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

//adding things to array
let emptyArray = new Array ();
for (let num = 0; num <10; num++) {
    emptyArray.push(num);
}

//console.log(emptyArray);