'use strict';

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]

// console.log(peopleArray);

// // Slide 9
// //assign array to variable
// const myArray = ['a','b','c'];

// typeof myArray //=> 'object'
// const other = myArray;

// console.log(typeof myArray);

// //access value in other
// console.log( other[1] ); //print 'b'
// console.log( myArray[1] ); //print 'b'

// //assign function to variable
// function sayHello(name) { 
//   console.log("Hello, "+name);
// }
// // console.log(sayHello("tim"))
// console.log(typeof sayHello); // 'function'

// const other1 = sayHello;

// //prints "Hello, everyone"
// other1('everyone'); 
// sayHello('everyone'); 


// // Slide 10
// const array = [1,2,3]; //named variable (not anonymous)
// console.log(array); //pass in named var

// console.log( [4,5,6] ); //pass in anonymous value

// //named function
// function sayHello(person){ 
//   console.log("Hello, "+person); 
// }

// //anonymous function (no name! so in this state its invalid) 
// function (person) {
//   console.log("Hello, "+person);
// }

// //anonymous function (value) assigned to variable
// const sayHello = function(person) {
//   console.log("Hello, "+person);
// }


// sayHello("Todd");


// //Slide 11
// const obj = {}

// function sayHello(name) { 
//    console.log("Hello, "+name);
// }

// console.log(obj);

// //assign function to object
// obj.sayHi = sayHello;

// //access with dot notation
// obj.sayHi('all'); //prints "Hello all"
// console.log(obj.sayHi)

// // console.log(obj);

// //assign literal (anonymous value)
// obj.otherFunc = function() { 
//     console.log("Hello world!");
//     return 1;
// }

// console.log(obj);
// console.log("obj.otherFunc(): ", obj.otherFunc());

// // slide 12

// function sayHello(name) { 
//   console.log("Hello, "+name);
// }

// //takes ANOTHER FUNCTION as an arg
// //will call the arg function, 
// //passing it "world"
// function doWorld(aFunction) {
//   aFunction("world");
// }

// // //call function and pass value
// doWorld(sayHello); //prints "Hello world"


// // //pass literal (anonymous value)
// doWorld(function(msg) {

//    console.log("you said: "+msg);

// }); //prints "you said: world"

/* note where parens and braces close! */

// // slide 13 passing versus calling
// function sayHello() { //version with no args
//   return "Hello";
// }

// //print out the function
// console.log( sayHello ); // logs "[Function: sayHello]" 
//                        // the function

// //resolve the expression, THEN print that out
// console.log( sayHello() ); // logs "Hello", which is 
//                           // what `sayHello()` resolves to.

// // Slide 14 Calback Functions
// //takes in TWO callback functions!
// function doTogether(firstCallback, secondCallback){
//   firstCallback();  //execute the first function
//   secondCallback();  //execute the second function
//   console.log('at the same time!');
// }

// function patHead() {
//   console.log('pat your head');
// }

// function rubBelly() {
//   console.log('rub your belly');
//   // return patHead;
// }

// //pass in the callbacks to do them together
// doTogether(  rubBelly, patHead);
// 
// Slide 15

// //Arbitrary list of people's names, heights, and weights
// let peopleArray = [ {name: 'Ada', height: 64, weight: 200},
//                     {name: 'Bob', height: 54, weight: 199},
//                     {name: 'Chris', height: 69, weight: 139},
//                     {name: 'Diya', height: 69, weight: 144},
//                     {name: 'Emma', height: 71, weight: 152}];

// console.log('**-Initial**');
// peopleArray.forEach((person) => console.log(person))

// //a function to "sort" people objects. Returns
// //  < 0 if A comes before B, 
// //  > 0 if B comes before A
// //  0 if A and B stay in current order
// function sortByHeightFunction(personA, personB) {
//   if(personA.height < personB.height) {
//     return -1; //person A is shorter, so they come first
//   } else if(personA.height > personB.height) {
//     return 1; //person B is shorter, so they come first 
//   } else {
//     return 0;
//   }
// }

// console.log('**-By Height**');
// peopleArray.sort(sortByHeightFunction); //sorts in place!
// peopleArray.forEach((person) => console.log(person))

// function sortByWeightFunction(personA, personB) {
//   if(personA.weight < personB.weight) {
//     return -1; //person A is lighter, so they come first
//   } else if(personA.weight > personB.weight) {
//     return 1; //person B is lighter, so they come first 
//   } else {
//     return 0;
//   }
// }

// console.log('**-By Weight**');
// peopleArray.sort(sortByWeightFunction); //sorts in place!
// peopleArray.forEach((person) => console.log(person))

// // Slide 16 - Array Iteration

// //Iterate through an array
// const array = ['a','b','c'];
// const printItem = function(item) {
//    console.log(item);
// }

// array.forEach(printItem);

// //more common to use anonymous function
// array.forEach(function(item) {
//    console.log(item);
// });

// //Slide 17 forEach() callbacks

// //Iterate through an array
// const myArray = ['a','b','c'];

// myArray.forEach(function(theItem, index, theArray) {
//   //the item itself (e.g., `array[i]`` in a for loop)
//   console.log(theItem); 

//   //the index (e.g., `i` in a for loop). Rarely used.
//   console.log(index); 

//   //the array (e.g., `array` in a for loop). Never used.
//   console.log(theArray);
// });

// //Slide 18 Mapping

// function square(n) { //a function that squares a number
//   return n*n;
// }

// const numbers = [1,2,3,4,5];  //an initial array
// console.log(numbers);

// // //transform the numbers using the square() function
// // const squares = []; //the transformed array
// // for(let i=0; i<numbers.length; i++) {
// //  const transformed = square(numbers[i]);
// //  squares.push(transformed); //add transformed to array
// // }
// // console.log(squares); // [1, 4, 9, 16, 25]

// //map the numbers using anonymous callback function
// // const squares = numbers.map(square)

// const squares = numbers.map(function(n) {
//   return n*n;
// });

// console.log(squares); // [1, 4, 9, 16, 25]
// console.log(numbers)

// // Slide 19 - Practice

// const peopleNames = ['Mickey', 'Daffy', 'Elmer'];

// const greetTransform = function (nameString) {
//   const transformed = "Hi " + nameString + "!"
//   return transformed
// };

// const peopleGreetings = peopleNames.map(function (nameString) {
//   const transformed = "Hi " + nameString + "!"
//   return transformed
// });

// // const peopleGreetings = peopleNames.map(greetTransform);

// console.log(peopleGreetings);

// Slide 20 - Filtering

const array = [3,1,4,2,5];
console.log(array);

const isACrowd = array.filter(function(n) { 
   return n >= 3; //keep if > 3
}); //returns [3,4,5]

console.log(isACrowd);

console.log(peopleArray);

const tallPeopleArray = peopleArray.filter(function (personObj) {
  
  return personObj.height > 69;

})
console.log(tallPeopleArray);



// // Slide 21 - Reducing

// const letters = ['a','b','c','d','e'];  //an initial array

// function link(accumulation, newItem) { //combines two strings
//   const newAccumulation = accumulation + "->" + newItem;
//   return newAccumulation;
// }

// let linked = ""; //an accumulated aggregate, start at ""
// for(let i=0; i<letters.length; i++){
//   linked = link(linked, letters[i]);
// }
// console.log("linked element: ", linked); //"->a->b->c->d->e"
// console.log(letters)

// // Slide 22 - Reducing
// const letters = ['a','b','c','d','e'];  //an initial array

// function link(accumulation, newItem) { //combines two strings
//   const newAccumulation = accumulation + "->" + newItem;
//   return newAccumulation;
// }

// const linked = letters.reduce(link, ""); //pass func, starting value

// console.log(linked); //"->a->b->c->d->e"

// function accumulate(accumulation, personObj) {
//   const newAccumulation = accumulation + personObj.height;
//   return newAccumulation;
// }
// const totalHeightOfPeople = peopleArray.reduce(accumulate, 0);

// console.log(totalHeightOfPeople);

// Slide 23 - Practice 
const phoneDigits = [6,5,9,6,3.5,7];

function largest(currentLargest, newNumber) {
  if (newNumber >= currentLargest )
  return newNumber;
  else return currentLargest;
}
const largestDigit = phoneDigits.reduce(largest, 0);

console.log(phoneDigits);
console.log(largestDigit);