const student= {
    yourName: "Billy", 
    type:"Undergrad", 
    currentCourse:"CS50",
    enroll: function() {
        console.log(`Hi there, ${student.yourName} `);
    }
    };

    console.log( student.enroll());
    console.log(`Your currently enrolled course is: ${student.currentCourse}`);
    document.write(`Your currently enrolled course is: ${student.currentCourse}`);
    