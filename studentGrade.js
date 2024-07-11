function studentGrade(){

    prompt = require("prompt-sync") ();
    let scores = prompt("enter marks");
    scores = parseInt(scores);

    let grade;
    if (scores <= 100 && scores >= 79) {
        grade = 'A' ;
    } else if (scores <= 78 && scores >= 60) {
        grade = 'B' ;
    } else if (scores <= 59 && scores >= 49) {
        grade = 'C' ;
    } else if (scores <= 40 && scores >= 49) {
        grade = 'D' ;
    } else {
        grade = 'E' ;
    } console.log (`${grade}`);
} 
studentGrade();