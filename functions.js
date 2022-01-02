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


function greeting() {
    var yourName = prompt ("What is your name? ");
    var result = "Hello, " + yourName;
    console.log(result);
}

greeting();


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

