//es5
function greetCustomer(customerName) {
    console.log("Hello " + customerName);

}
greetCustomer("Bahurudeen");
greetCustomer("Muhammad");
greetCustomer("ibrahim");

function checkForValidAge(age){
    return age > 18 ? true: false; 
}

var person1 = checkForValidAge(17) ;
console.log(person1);
var person2 = checkForValidAge(27) ;
console.log(person2);

//Anonymous functions
var test = function(marks) {
    return marks % 2 == 0 ? "passed": "failed";
};
console.log(test(100));

//ES6

function printFullName(fname,lname) {
    console.log(fname + " " + lname);
}
printFullName("spider","man");

//Arrow function
const printFullName1 = (fname1, lname1) => {
    console.log(fname1 + " " +lname1);
}
printFullName1("iron","man");

// function provideNumber1(number1) {
//     function provideNumber2(number2) {
//         return parseInt(number1) + parseInt(number2);
//     };
// }
// const result = provideNumber1(10);
// const finalResult = result(20);
// console.log(finalResult);