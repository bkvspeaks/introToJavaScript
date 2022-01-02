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




