var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function


function last(){
  for (var i = 0; i < threeItems.length; i++) {
    if (i === threeItems.length - 1) {
    console.log(threeItems[i]);
    }  
  }
}
last();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];


function checkEven(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i, 1);
      i--;
    } 
  }
  console.log(arr); 
}
checkEven(evenArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function getNumber(arr){
  var randNum = getRandomArbitrary();
  console.log(randNum);
  var answer = false;
  for (var i = 0; i < arr.length; i++) {
    if (randNum === arr[i]) {
      answer = true;
    }
  }
  if (answer === true) {
    console.log("True");
  }
  else {
    console.log("False");
  }
}
getNumber(randomArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

var first = [1,2,3,4,5];
var second = first.slice(0, first.length);
second.push(6, 7);

console.log(first); //[1,2,3,4,5];
console.log(second); 

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

function longest(str) {
  var array = str.split(' ');
  var longestWord = 0;
  var word;
  for (var i = 0; i < array.length; i++) {
    if (longestWord < array[i].length) {
      longestWord = array[i].length;
      word = array[i];
    }
  }
  console.log(word);
}
longest(sentence);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

var myPoem = 'What is a jQuery but a misunderstood object?';

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(toTitleCase(myPoem));



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
