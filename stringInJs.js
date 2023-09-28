let firstName = "Bahurudeen";
let lastName = "Abbas";
console.log(firstName.length, lastName.length); //10 5

console.log(firstName.slice(6)); //deen
console.log(firstName.slice(1,6)); //ahuru
console.log(firstName.slice(-6)); //rudeen
console.log(firstName.slice(-1)); //n
console.log(firstName.slice(1,7,4)); //ahurud
console.log(firstName.slice(-1, -6)); // nothing is displayed
console.log(firstName.substring(1,4));// ahu
console.log(firstName.substring(-1)); //- does not valid
console.log(firstName.substr(1,5)); //ahuru
console.log(firstName.replace("u","a")); //case sensiive replace only one letter
console.log(firstName.replaceAll("u", "a")); //replace all letters
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.concat(lastName));
console.log("Hello ".concat( " " + firstName));

var randomText = "     bahu     ";
console.log(randomText.trimStart()); // trim the starting point
console.log(randomText.trimEnd()); // trim at the end
console.log(randomText.trim()); //trim both left and right

let greetings =  "Hello, how is Going";

console.log(greetings.lastIndexOf("how"));
console.log(greetings.indexOf("is"));
console.log(greetings.search("how"));
console.log(greetings.match("how"));
console.log(Array.from(greetings.matchAll("is")));
