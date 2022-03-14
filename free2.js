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

  //