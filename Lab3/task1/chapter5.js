let str = "Hello";
alert( str.toUpperCase() ); // HELLO

let n = 1.23456;
alert( n.toFixed(2) ); // 1.23

alert(null.test); // error

let billion = 1_000_000_000;

let billions = 1e9;

let mcs = 1e-6;

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4. In the middle cases 3.5 rounds up to 4, and -3.5 rounds up to -3.
// Math.trunc (not supported by Internet Explorer)
// Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

let numa = 1.23456;

alert( Math.round(numa * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

let nums = 12.34;
alert( nums.toFixed(1) ); // "12.3"

let nume = 12.36;
alert( nume.toFixed(1) ); // "12.4"

let numi = 12.34;
alert( num.toFixed(5) );

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

alert( Math.pow(2, 10) ); // 2 in power 10 = 1024


let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines
let guestLists = "Guests:\n * John\n * Pete\n * Mary";

let strw = `Hello`;

// the first character
alert( strw[0] ); // H
alert( strw.at(0) ); // H

// the last character
alert( strw[strw.length - 1] ); // o
alert( strw.at(-1) );


alert( str[-2] ); // undefined
alert( str.at(-2) ); // l

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

let strs = 'Hi';

strs = 'h' + strs[1]; // replace the string

alert( strs ); // hi

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

let strq = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = strq.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

let stri = "stringify";
alert( stri.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( stri.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

// different case letters have different codes
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)

alert( 'Österreich'.localeCompare('Zealand') ); // -1



let arrs = [];

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

fruits.push("Pear");

alert( fruits.shift() ); 
fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear

for (let fruit of fruits) {
  alert( fruit );
}

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[0][1] );

let arri = ["I", "study", "JavaScript"];

arri.splice(1, 1); // from index 1 remove 1 element

alert( arri ); // ["I", "JavaScript"]

let arrk = ["t", "e", "s", "t"];

alert( arrk.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arrk.slice(-2) ); // s,t (copy from -2 till the end)

alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

// arr.splice(start[, deleteCount, elem1, ..., elemN])

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2

// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);

// Almost all array methods that call functions – like find,
//  filter, map, with a notable exception of sort, 
// accept an optional additional parameter thisArg.