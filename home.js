console.log('Hello!');

//Variables
var b = 'smoothie';
console.log(b);

var someNumber = 15;
var someNumber1 = 15;
var someNumberr = someNumber + someNumber1;
console.log(someNumberr);

var num1 = 10;

//increment
num1++;

//decrement
num1--
console.log(num1);

console.log(num1 / 2);

num1 += 10;
console.log(num1);

/*Functions
1.Create a function
2.Call the function
*/


//Create
function age() {
  var age = prompt('What is your age?');
  var result = 'Your age is ' + age;
  document.getElementById('someText').innerHTML = result;
}

//Call
// age();

function greeting() {
  var name = prompt('What is your name?');
  var result = 'Hello ' + name;
  document.getElementById('greeting').innerHTML = result;
}
// greeting();

function sumNumbers() {
  var num1 = prompt('First number');
  var num2 = prompt('Secons number');
  var num3 = prompt('Third number');
  var numAll = num1 + num2 + num3;
  document.getElementById('fun').innerHTML = numAll;
  // console.log(numAll);
}
// sumNumbers();

 //Fot loop
/* for(let num =0; num <= 100; num++) {
  console.log(num);
}

//While loop
var num1 = 0;
while(num1 < 100) {
  num1 ++;
  console.log(num1);
} */

//Data Types
let numAge = 18; //Number
let Name = 'Sherali'; //String
let Object = {first: 'Sherali', last: 'Tukhtayev'}; //Object
let truth = false; //Boolean
let groceries = ['Apple', 'Nut', 'Cucumber'] //Array
let random; //Undefined
let nothing = null; //Value null

//String in Javascript (common methods)
let fruit = 'apple, banana, melon, pineapple';
let moreFruit = 'Apple\nOrange';        //Add another object to new line

console.log(fruit.length);    //Show object's letters number
console.log(fruit.indexOf(',')); //Show this Letter which number of word
console.log(fruit.slice(0, 5)); //Show letter from 1 written number until last written number
console.log(fruit.replace('App','123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(3));
console.log(fruit.split(' , '));

//Array
var fruits = ['Banana', 'Apple', 'Pineapple', 'Melon'];
var fruits = new Array ('banana', 'apple', 'orange', 'pineApple');
// console.log(fruits);

alert (fruits[0]);