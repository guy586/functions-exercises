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
  for ( let i = 0 ; i < str.length ; i++){
    let temp = "";
    for ( let j = i ; j < str.length ; j++){
      temp += str[j];
			combinations.push(temp);
    }
  }
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
  } if (n === 1) {
      return pwr;
  }
  for (let i = n ; i > 1 ; i--) {
    pwr *= x;
  }
  return pwr;
}

//Question 5
function getFirstNotRepeating(str) {
  let notRpt = "";
  for (let i = 0 ; i < str.length ; i++) {
    let rpts = 0;
    for (let j = 0 ; j < str.length ; j++) {
      if (str[i] === str[j]) {
        rpts++;
      }
    }
    if (rpts === 1) {
      notRpt = str[i];
      break;
    }
  }
  
  return notRpt;
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  let sum = 0;
	for (let i = 1 ; i < num ; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}
	return num === sum;
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
