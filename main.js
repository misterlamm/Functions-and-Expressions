// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2){
    // Your answer here
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
}

console.log(max(1, 3));
// MAX of TWO NUMBERS
console.assert(max(200, 58998) === 58998);
console.assert(max(-400, 2) === 2);
console.assert(max(223, 221) === 223);

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1, num2, num3){
    // Your answer here
    if ((num1 >= num2) && (num1 >= num3)) {
      return num1;
  } else if ((num2 >= num1) && (num2 >= num3)) {
      return num2;
  } else {
      return num3;
  }
}



console.log(maxOfThree(1, 6, 8))
// MAX OF THREE NUMBERS
console.assert(maxOfThree(89, 270, 85) === 270);
console.assert(maxOfThree(27, 25, 26) === 27);
console.assert(maxOfThree(100000, 2, 20924848) === 20924848);

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    // Your answer here
    { var vowel = 'a' || 'e' || 'i' || 'o' || 'u' || 'y' || 'A' || 'E' || 'I' || 'O' || 'U' || 'Y';
      if (char === vowel) {
        return true
      } else {
        return false
      }
    }
}

console.log(isVowel('a'))
//READ IF SINGLE CHARACTER IS vowel
console.assert(isVowel("A") === true);
console.assert(isVowel('a') === true);
console.assert(isVowel('b') === false);
console.assert(isVowel('c') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel("Y") === true);


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(num1, num2) {
  var total = num1 + num2;
  return total;
}

console.log(sum(1, 3));
// SUM OF TWO NUMBERS
console.assert(sum(3, 700) === 703);
console.assert(sum(20, 98778) === 98798);
console.assert(sum(8778, 1000) === 9778);

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(num1, num2, num3) {
  var average = (num1 + num2 + num3) / 3;

  return average;

}

console.log(avg(1, 2, 3))
// AVERAGE OF THREE NUMBERS
console.assert(avg(20, 27, 37) === 28 );
console.assert(avg(75, 28, 5) === 36);
console.assert(avg(200, 500, 20) === 240);

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(str) {
  return str.length;
}

console.log(getLength('hisdudeness'))
// LENGTH OF A STRING
console.assert(getLength("word") === 4);
console.assert(getLength('this is a really short string') === 29);
console.assert(getLength('Lorem ipsum dolor sit amet, consectetur adipisicing elit.') === 57);
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(num1, num2) {
  if (num2 > num1) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan(2, 4))
// CHECK WHICH NUMBER IS GREATER THAN
console.assert(greaterThan(7, 2) === true);
console.assert(greaterThan(10, 5) === true);
console.assert(greaterThan(50, 2000) === false);
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

 function greet(str) {
  //  prompt('Enter your name');
  //  var userName = prompt('Enter your name');
   var message = 'Hello, ' + str + '!';
  //  alert(message);
   return message;
 }

 console.log(greet('J-Roc'));
 // greet('J-Roc');
 //GREET SOMEONE!
console.assert(greet("Garret") === "Hello, Garret!");
console.assert(greet("Shannon") === "Hello, Shannon!");
console.assert(greet("George") === "Hello, George!");

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madlib(str, str2, str3, str4) {
  var sentence = str + " was walking to the " + str2 + " when their good friend " + str3 + " saw them. They walked up to them and said " + str4 + ".";
  return sentence;
}

console.log(madlib('Lahey', 'liquor-store', 'Randy', 'hello'));
