//While Loops
var num = 0;
while (num< 10) {
    num +=1;
    console.log(num);
}
//outputs 1 - 10

//For Loops
for (let numfor = 50; numfor <60; numfor+=1) {
    console.log(numfor);
}
//outputs 50-59
let fruits = ['banana', 'apple', 'orange', 'pineapple'];
for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

let emptyArray = new Array ();
for (let num = 0; num <10; num++) {
   emptyArray.push(num);
}
console.log(emptyArray);
