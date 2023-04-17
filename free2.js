// Пишите многоразовый JavaScript с функциями
function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();
  }

  // Передача значений функциям с аргументами
  
  //Stand in Line
  function nextInLine(arr, item) {
    arr.push(item);
    
    var temp = arr.shift(1);
    
    return temp; // Change this line
    }
    
    // Test Setup
    var testArr = [1,2,3,4,5];
    
    // Display code
    console.log("Before: " + JSON.stringify(testArr));
    console.log(nextInLine(testArr, 6));
    console.log("After: " + JSON.stringify(testArr));

    //Understanding Boolean Values
    function welcomeToBooleans() {
      // Only change code below this line
    
      return true; // Change this line
    
      // Only change code above this line
    function trueOrFalse(wasThatTrue) {
  if (trueOrFalse) {
    return "Yes, that was true";
  }
  // Only change code below this line
    return "No, that was false";
  // Only change code above this line
}

//Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  // Only change code below this line
    return "No, that was false";
  // Only change code above this line
}

trueOrFalse(false);

//Comparison with the Equality Operator
//Сравнение с оператором равенства

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
testEqual(12);
testEqual("12");

//Comparison with the Strict Equality Operator
//Сравнение с оператором строгого равенства
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);


//Practice comparing different values
//Практика сравнения различных значений
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

//Comparison with the Inequality Operator
//Сравнение с оператором неравенства

// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//Сравнение с оператором строгого неравенства
//Comparison with the Strict Inequality Operator
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//Comparison with the Greater Than Operator
//Сравнение с оператором больше, чем
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//Сравнение с оператором больше или равно
//Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//Comparison with the Less Than Operator
//Сравнение с оператором меньше, чем
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//Сравнение с оператором меньше или равно
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//Сравнения с логическим оператором И
function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {

  return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//Сравнения с логическим оператором Or
function testLogicalOr(val) {
  Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

//Знакомство с операторами Else
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}
testElse(4);

//Знакомство с операторами Else If
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
  }
}
testElseIf(7);

//Логический порядок в операторах If Else

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);

//Цепочка операторов If Else
function testSize(num) {
  // Only change code below this line
  
 else if (num < 10) {
  return "Small";}
  else if (num < 15) {
  return "Medium";}
  else if (num < 20) {
  return "Large";}
  if (num >= 20) {
  return "Huge";}
   else  return "Change Me";
  // Only change code above this line
}
testSize(7);

//Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes<=1) {
    return "Hole-in-one!";
  } else if (strokes <= par-2) {
    return "Eagle";
  } else if (strokes <= par-1) {
    return "Birdie";
   } else if (strokes <= par) {
    return "Par";
  }  else if (strokes <= par+1) {
    return "Bogey";
   } else if (strokes <= par+2) {
    return "Double Bogey";
  }  else if (strokes >= par+3) {
    return "Go Home!";
    } else {
  // Only change code below this line
  return "Change Me";
  // Only change code above this line
 }
}

golfScore(5, 4);

//Выбор из множества вариантов с операторами Switch
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
    switch (val) {    
    case 1:
    answer = "alpha";
     break;
     case 2:
    answer = "beta";
     break;
     case 3:
    answer = "gamma";
     break;
     case 4:
    answer = "delta";
    }

  // Only change code above this line
  return answer;
  }

caseInSwitch(1);

//Добавление параметра по умолчанию в операторы Switch
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
answer = "apple"
break;
case "b":
answer = "bird"
break;
case "c":
answer = "cat"
break;
default:
    answer = "stuff";
}
  // Only change code above this line
  return answer;
}

switchOfStuff(1);

//Несколько идентичных опций в операторах switch
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//Замена цепочек If Else на Switch
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

 switch (val) {
   case "bob":
    answer = "Marley";
    break;
    case 42: 
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;
  }
  // Only change code above this line
  return answer;
}
chainToSwitch(7);
        Возврат логических значений из функций

        function isLess(a, b) {
            // Only change code below this line
            return (a < b)
        }
        // Only change code above this line
        isLess(10, 15);

        Вернуть ранний шаблон для функций
        
 Подсчет карт
 let count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
        
