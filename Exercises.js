//Question 1
function myReverse(str) {
  let n = "";
  for (let i = str.length - 1 ; i >= 0 ; i--) {
    n += str[i];
  }
  return n;
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  
  //
  return combinations;
}

//Question 3
function allCaps(str) {
  let n = "";
  n += str[0].toUpperCase();
  for (let i = 1 ; i < str.length ; i++) {
    if (str[i-1] === " ") {
      n += str[i].toUpperCase();
    } else {
        n += str[i];
    }
  }
  return n;
}

//Question 4
function myPower(x, n) {
  let pwr = x;
  if (n === 0) {
    return 1;
  }
  for (let i = n ; i > 0 ; i--) {
    pwr *= x;
  }
  return pwr;
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
