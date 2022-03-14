// Присвоение значения одной переменной другой
var a;
a = 7;
var b;
b = a;

//Инициализация переменных с помощью оператора присваивания
var a = 9

//Объявить строковые переменные
var myFirstName = "Artem";
var myLastName = "Shukalovich";

// Понимание неинициализированных переменных
// Only change code below this line
var a = 5;
var b = 10;
var c = 'I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//Понимание чувствительности к регистру в переменных
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Исследуйте различия между ключевыми словами var и let
let catName = "Oliver";
let catSound = "Meow!";

// Объявите переменную только для чтения с ключевым словом const
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// Добавить два числа с помощью JavaScript
const sum = 10 + 10;
//Вычесть одно число из другого с помощью JavaScript
const difference = 45 - 33;
//Умножение двух чисел с помощью JavaScript
const product = 8 * 10;
// Разделите одно число на другое с помощью JavaScript
const quotient = 66 / 33;
//Увеличение числа с помощью JavaScript
let myVar = 87;
myVar++;
// Уменьшить число с помощью JavaScript
let myVar = 11;
myVar--;
//Создание десятичных чисел с помощью JavaScript
const ourDecimal = 5.7;
let myDecimal = 7.5
// Умножение двух десятичных дробей с помощью JavaScript    
const product = 2.0 * 2.5;
// Разделите одно десятичное число на другое с помощью JavaScript
const quotient = 4.4 / 2.0; // Change this line
// Поиск остатка в JavaScript
var remainder = 0;
remainder = 11 % 3;
// Составное задание с дополненным дополнением
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// Экранирование буквенных кавычек в строках
I am a "double quoted" string inside "double quotes".
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// Заключение строк в одинарные кавычки
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape-последовательности в строках

const myStr =  'FirstLine\n\t\\SecondLine\nThirdLine';

// Объединение строк с помощью оператора Plus
const myStr = "This is the start. " + "This is the end.";
// Объединение строк с помощью оператора «плюс равно»
let myStr = 'This is the first sentence.';
myStr +=' This is the second sentence.';

//Создание строк с переменными
const myName = "Artem";
const myStr = "My name is" + myName + "and I am well";

// Добавление переменных к строкам
const someAdjective = "very good";
let myStr = "Learning to code is ";
myStr += someAdjective

// Найдите длину строки
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";
console.log(lastName.length)

// Only change code below this line
lastNameLength = lastName.length;

//Используйте нотацию скобок, чтобы найти первый символ в строке
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; 

//Понимание неизменности строк
// Setup
let myStr = "Jello World";

// Only change code below this line
//myStr[0] = "H"; // Change this line
// Only change code above this line
myStr = "Hello World";

// Используйте нотацию скобок, чтобы найти N-й символ в строке
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2];

// Используйте нотацию скобок, чтобы найти последний символ в строке
// Setup
const lastName = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1];

// Используйте нотацию скобок, чтобы найти N-последний символ в строке
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; 

//Пустые слова
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "I today " + myVerb + " becouse " + myAdverb + " runs " + myNoun + " yes " + myAdjective + " ."; // Change this line
// Only change code above this line
console.log(wordBlanks)

//Сохранение нескольких значений в одной переменной с использованием массивов JavaScript
const myArray = ["cereal", 21, "meat"]; 

//Вложение одного массива в другой массив
const myArray = [["rise", 11],[13, "fish"]];

//Доступ к данным массива с помощью индексов
const myArray = [50, 60, 70];
const myData = myArray[0]

//Измените данные массива с помощью индексов
const myArray = [18, 64, 99];
myArray[0] = 45;

//Доступ к многомерным массивам с индексами
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  
  //const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

//Управление массивами с помощью push()
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

//  Управление массивами с помощью pop()
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop()
console.log(removedFromMyArray)
console.log(myArray)

// Список покупок
const myList = [["Brendy", 3],["Weesky", 5],["Vodka", 1],["Beer", 10],["Vino", 7],["Water", 15]];


