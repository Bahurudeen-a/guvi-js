/*
four loops 
    1. for loop
    2. while loop
    3. for each loop
    4. do while loop
*/

//FOR loop

let friends = ['madhu balaji', 'subramanian', 'vinoth', 'raman'];
for(let i=0; i < friends.length; i++) {
    console.log( "index " + i +':' + friends[i]);
    console.log(friends[i] + " " + "lakshmanan");
}

var fname = "Joshep Vijay ";
for (let  i=0; i <fname.length;i++){
    console.log(fname[i]);
}

//For Each

let friends1 = ['madhu balaji', 'subramanian', 'vinoth', 'raman'];
friends1.forEach((item,index) => {
    console.log(item,index);
});

// var fname1 = "Joshep Vijay ";
// fname1.forEach((letter,index) => {
//     console.log(letter,index);
// });

//WHILE Loop

let k= 0;
let result = 'The Current Counter is at ';
while(k < 10) {
    result += k;
    k++;
    console.log(result + " " + k);
}

//Do While 
var count = 10;

do {
    console.log(count);
    count--;
} while (count>100)