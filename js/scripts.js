
var numberWords = function(number) {

  var lessThanTwenty = {

    "0": "",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen"
  };

  var tens = {
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety"
  };

// var splitNumber = number.split("");
// console.log("hello");
// var doubleDigit =[];
// var twoDigit = tens[number] + " " + lessThanTwenty[number];
var sNumber = number.split("");
var result;
// var integer = number.parseInt();
// var indexOne = sNumber[0];
// var indexTwo = sNumber[1];
// var indexOneString = indexOne.toString();
// var indexTwoString = indexTwo.toString();


  // for (var i = 0; i < number.lengths; i++) {
    if (number <= 20) {
      result = lessThanTwenty[number];
      // result = tens[sNumber[0]];
    } else if (number <= 9) {
      result = tens[sNumber[0]];
    } else if ((number % 10) !== 0) {
      result = tens[sNumber[0]] + " " + lessThanTwenty[sNumber[1]];
      // result = tens[number];
    }
    // } else if (number  )   {
    //   // return tens[(indexOne)*10] + " " + lessThanTwenty[(indexTwo)];
    //   // result = tens[sNumber[0]] + " " + lessThanTwenty[sNumber[1]];
    // }

    return result;
};


      // tens[number] + " " + lessThanTwenty[number];
      // doubleDigit.push();
      // doubleDigit.push(number[1]);
      // return tens[number];
