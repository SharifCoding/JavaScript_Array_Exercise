const getNthElement = (index, array) => {
  if (index > array.length -1){
    return array[index - array.length];
    }
  return array[index];
};
// const array = ['cat', 'dog', 'elephant', 'fox']

const arrayToCSVString = (array) => {
  return array.join();
};
// returns the array elements as a comma-seperated string

const csvStringToArray = (string) => {
  return string.split(",");
};
// converts the csv string as an array

const addToArray = (element, array) => {
  array.push(element);
};
// adds the item to the end of the array

const addToArray2 = (element, array) => {
  return array.concat(element);
};
// returns a new array with the value appended

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};
// removes the element at position n

const numbersToStrings = (numbers) => {
  return numbers.map(String);
};
// converts every number in the array to a string

const uppercaseWordsInArray = (strings) => {
  return strings.map(function(n) {
    return(n).toUpperCase()
    });
};
// makes every string in the array uppercase

const reverseWordsInArray = (strings) => {
  const animalsRev = strings.map((strings) => {
    const char = strings.split("");
    const reverseChar = char.reverse();
    return reverseChar.join("");
    })
  return animalsRev;
};
// reverses every string in an array

const onlyEven = (numbers) => {
  return numbers.filter(function(n){return n % 2===0})
};
// filters the array and only returns even numbers

const removeNthElement2 = (index, array) => {
  const firstSection = array.slice(0, index);
  const secondSection = array.slice(index + 1);

  return firstSection.concat(secondSection);
};
// returns an array with the nth element removed, and does not mutate the original

const elementsStartingWithAVowel = (strings) => {
  let stringsArray = []
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

  for (let i = 0; i < strings.length; i++) {
    for (let n = 0; n < vowels.length; n++) {
    if (strings[i].charAt(0) == vowels[n]) {
      stringsArray.push(strings[i]);
      }
    }
  }
  return stringsArray
};
// returns elements starting with a vowel & is case insensitive

const removeSpaces = (string) => {
  return string.split(" ").join("")
};
// returns the string with the space characters removed

const sumNumbers = (numbers) => {
  let total = 0;

  for (let n = 0; n < numbers.length; n++) {
    total += numbers[n];
    }
  return total;
};
// returns the sum of the numbers in the array

const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};
// sorts the string by the last character

const isArray = (input) => {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
};
// isArray - check whether an input is an array or not
// The toString() method returns a string representing the specified array and its elements.

const arrayClone = (array) => {
 return array.slice(0);
};
// arrayClone - clone an array
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end.

const firstArray = (array, n) => {
  if (n == null)
    return array[0];
  return array.splice(0,n);
};
// get the first element of an array
// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

const lastArray = (array, n) => {
  return array.reverse().slice(0, n).reverse();
};
// get the last element of an array
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

myColour = ["Red", "Green", "White", "Black"];
// join all elements of the following array into a string
// The join() method joins all elements of an array (or an array-like object) into a string and returns this string.

const dash = (number) => {
var numberArray = number.toString().split("");
var result = "";
  for (var n = 0; n < numberArray.length; n++) {
    result += (parseInt(numberArray[n]) % 2 == 0) ? ("-" + numberArray[n]) : numberArray[n];
  }
  return result;
};
// insert dashes (-) between each two even numbers (input 025468, output 0-254-6-8)
// The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

const sortArray = (array) => {
  return array.sort();
};
// sort the items of an array (input [3,8,7,6,5,-4,3,2,1], output [-4,-3,1,2,3,5,6,7,8])
// The sort() method sorts the elements of an array in place and returns the array.

const mostFrequent = (array) => {
  return array.sort((x, y) =>
    array.filter(e => e === x).length -
    array.filter(e => e === y).length
  ).pop();
};
// find the most frequent item of an array (input [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], output a (5 times)
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const swapCase = (string) => {
string = string + '';
  return string.split('').map(function(currentItem) {
    let item = currentItem;
    return currentItem = item === item.toUpperCase() ? item.toLowerCase(): item.toUpperCase()
  }).join('');
};
// swap the case of each character (input 'The Quick Brown Fox' output 'tHE qUICK bROWN fOX')
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const printNested = (array) => {
var string = "";
  for (var i = 0; array.length > i; i++) {
    string += "Row " + i + ": ";
    for (var j = 0; array[i].length > j; j++) {
      string += array[i][j];
      if (array[i].length - 1 != j) {
        string += ", ";
      }
    }
  string += " ";
  }
return string;
};
// prints the elements of the following array

// jest access to global variables jsArrays.test.js
module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
  isArray, 
  arrayClone, 
  firstArray, 
  lastArray, 
  myColour, 
  dash,
  sortArray,
  mostFrequent,
  swapCase,
  printNested,
};
