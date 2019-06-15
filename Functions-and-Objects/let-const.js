// const keyword used to define constants
const MYNAME = "Matovu Ronald";
console.log(MYNAME);
// MYNAME = "Ritah"; // It is not possible to change the value of a constant

// let keyword for block scope (Has small scope than even var keyword)
function logScope() {
    var localVar = 3;
    if(localVar) {
        let localVar = "I'm different";
        console.log("nested localVar", localVar);
    }
    console.log("logScope localVar: ", localVar);
}

logScope();