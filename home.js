console.log("Hello");
//alert("Yo! Check the console!"); //this is a single line commment
console.log("This is found in home.js");

//var age = prompt("What is your age: ");
document.getElementById('sometext').innerHTML = "Hello from JavaScript";

//document.getElementById('yourage').innerHTML = age;

//Numbers
/*
var num1 = 5;
var num2 = 5.7;
document.write(num1 + num2);
document.write("   |   ");
document.write(660*6);//can do math directly without use of variables
document.write("   |   ");
num1 = num1+1 //increases num1 by 1
document.write(num1 + num2);

document.write("   |   ");
num1++; // shortcut for num1 = num1+1
document.write(num1 + num2);

document.write("   |   ");
num1--; // shortcut for num1 = num1-1
document.write(num1 + num2);

document.write("   |   ");
document.write(num1);
document.write("   |   ");
document.write(num1 % 5);

num1+=10;
document.write("   |   ");
document.write(num1 );
*/

//Functions
//defining the function
function fun () {
    console.log("This is a function.");
}

fun(); // calling the function

/*
Take in a name from the user
Greet the user by name
*/

/*
function greeting() {
    var name = prompt ("What is your name? ");
    var result = "Hello, " + name;
    console.log(result);
}

greeting();

*/

function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(5,8); //returns 13
sumNumbers(); //returns NaN - arguments are required
sumNumbers("'Sup, ", "Dude?") //returns 'Sup, Dude?
sumNumbers("10", 10) //returns 1010


function greeting2(yourName) {
    var result = "Hello, " + yourName;
    console.log(result);
}

var username = prompt("What is your name? ");
greeting2(username);

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