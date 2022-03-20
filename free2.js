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