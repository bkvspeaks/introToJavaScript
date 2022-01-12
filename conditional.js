//Ex 1
let answer = prompt("Which planet is closest to the Sun?: ");
answer = answer.toLowerCase();

if (answer === 'mercury') {
    console.log("That's correct!");
    } else {
    console.log("That's not correct. You have failed 3rd grade science.");
    }

//Ex 2
//25 - 35  is the target demographic
var age = prompt ("What's your age in years?: ");

if ((age >= 25) && (age <= 35)) {
   message = 'target audience';
} else {
   message = 'not my audience';
}
console.log(message);

//Ex 3
const weather = prompt ("How's the weather?: [ sun | rain | snow | other]");

if (weather === 'sun') {
 console.log("it's sunny, so I'm going swimming");
} else if (weather === 'rain') {
  console.log("it's raining, so I'll read a book");
} else if (weather === 'snow') {
  console.log("it's snowing, so I'll go sledding");
} else {
  console.log("I have no idea what to do today");
}
