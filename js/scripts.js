
var numberWords = function(number) {

  var lessThanTwenty = {

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
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety"
  };

// var splitNumber = number.split("");
console.log("hello");
var doubleDigit =[];
var twoDigit = tens[number] + " " + lessThanTwenty[number];


  // for (var i = 0; i < number.lengths; i++) {
    if (number < 20) {
      return lessThanTwenty[number];
    } else if ((number < 100) && (number >= 20)) {
      return tens[number];
    } else if ((number/10) !== 0)  {
      return tens[number] + " " + lessThanTwenty[number];
    }
      // console.log(number[0,1])

      // doubleDigit.push();
      // doubleDigit.push(number[1]);

      // return tens[number];
};

