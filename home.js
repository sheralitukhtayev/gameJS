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

fruits[1] = 'watermelon';

console.log(fruits[1]);

var gro = ['Cucumber', 'onion' , 'pear' , 'milk'];
groceries = new Array ('SHugar', 'Paper', 'Pencil', 'Water');

groceries[0] = 'salt';
 console.log(groceries);

 // array common methods
 console.log('to string', fruits.toString());
 console.log(fruits.join(' * '));
 console.log(fruits , fruits.pop(), fruits); //remove last item
 console.log(fruits.push('blackberries'), fruits); //appends
 console.log(fruits[3]);
 fruits[fruits.length] = 'new fruit'; //same as push
 console.log(fruits)
 fruits.shift(); //remove first element
 console.log(fruits)
 fruits.unshift('kiwi');

 let vegatables = ['asparagus','tomato', 'broccoli'];
 console.log(vegatables)
 let allGroveries = fruits.concat(vegatables);
 console.log(allGroveries);
 console.log(allGroveries.slice(1, 4));

 let someNumbers = [5, 43, 232, 2, 232, 11, 12,134, 123, 112, 445, 56, 12, 675, 22, 37 ];
//  console.log(someNumbers.filter());
console.log(someNumbers.sort(function(a, b) {return a-b})); //sorted in ascending order
console.log(someNumbers.sort(function(a, b) {return b-a})); //sorted in descending order

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
  emptyArray.push(num)
}
console.log(emptyArray);


let movie = Array()
for (aa = 0; aa < 100; aa++) {
  movie.push(aa)
}
console.log(movie);

let film = Array()


//Objects in Javascript
let person = {
                first: 'Sherali',
                last: 'Tukhtayev',
                age: 17,
                height: 175,
                Boolean: true,
                infoAbout: function() {
                  return 'firstName: ' + this.first + '\n' + 'lastName: ' + this.last + '\n' + 'age: ' + this.age + '\n' + 'height: ' + this.height + '\n';
                }
              };
console.log(person);
console.log(person.first);
person.first = 'notSherali'; //changa value
console.log(person.first);
console.log(person.last);
console.log(person.height);
console.log(person.Boolean);
console.log(person.age);
person.age = 17
var age = 17
while( age < 100) {
  age++;
  console.log(person.age);
}

for(let age = 17; age < 100; age++) {
  console.log(person.age);
}
console.log(person.infoAbout());


// Conditionals, Control flows (if, else)
//18-35 target demographic
//&& is AND
// || is OR

// var age = prompt('What is your age?');

if ( (age >= 18) && (age <=35)) {
  status  = 'You are valid for my course';
  document.getElementById('age').innerHTML = status;
  console.log(status)
} else {
  status = 'You are invalid for my course';
  document.getElementById('age').innerHTML = status;
  console.log(status);
}

//Switch statement
//day 0 --> sunday
//day 6 --> Saturday -->
//day 4 --> Thursday --> weekday
switch(2) {
  case 0:
        text = 'weekend';
        break;
  case 5:
        text = 'weekend'
        break;
  case 6:
        text = 'weekend'
        break;
  default:
        text = 'weekday'
}

console.log(text);

prompt('write the day of number')