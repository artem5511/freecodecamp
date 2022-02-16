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