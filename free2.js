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
  if (trueOrFalse) {
    return "Yes, that was true";
  }
  // Only change code below this line
    return "No, that was false";
  // Only change code above this line
}