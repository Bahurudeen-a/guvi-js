// && -and
// || or
let age = 24;
let fname = "bahurudeen";
if (age > 18 && fname === "bahu") {
    console.log("hello");
}
else {
    console.log("Oops! Bye");
}

var salary = 1000000;
let employee = 'ajith';
if (employee === 'ajith' || salary > 10000) {
    console.log("Salary Increment");
} else {
    console.log("Salary Decrement");
}

var salary1 = 5000;
if (salary1 > 20000) {
    console.log("This Salary is Ok for You");
} else {
    console.log("Go and Beg");
}

var salary2 = 16220;
let hikeCheck = salary2 > 20000 ? console.log("fine") : console.log("Go and Beg");

var contact = 1234554321;
let contactCheck = contact === contact ? console.log("you are not save this Number") : console.log("hey fool you alreadysave it");
