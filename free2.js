//Работа с массивами с помощью shift()
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

//Работа с массивами с помощью unshift()
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

//Передача значений функциям с аргументами
function functionWithArgs(one, two) {
    console.log(one+two);
  }
  functionWithArgs(7,  9);

  //Возврат значения из функции с возвратом
  function timesFive(num) {
    return num * 5;
  }
  const answer = timesFive(9)

  //Глобальный охват и функции
  const myGlobal=10;
oopsGlobal=5;
function fun1(x) {
  x=5
}
 
 //Локальный охват и функции
 function myLocalScope() {
  // Only change code below this line
   const myVar = "";
   console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

//Глобальная и локальная область видимости в функциях
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

//Понимание неопределенного значения, возвращаемого функцией
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5 ;
}
// Only change code below this line


// Only change code above this line

addThree();
addFive();
