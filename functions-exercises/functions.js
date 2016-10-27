//Problem 1
function combineWords(word1, word2) {
  var result = word1.concat(word2);
  return result;
}

//Problem 2
function repeatPhrase(phrase, n) {
  for (var i = n; i > 0 ; i--) {
      console.log(phrase);
  }
}

//Problem 3

//Problem 4
function areaOfACircle(radius) {
  var area = (radius * radius) * Math.PI;
  return area;
  }
}

//Problem 5
function pythagoreanTheorem(a, b) {
  var c = Math.sqrt((a * a) + (b * b));
  return c;
  }
}

//Problem 6
function isXEvenlyDivisibleByY(x, y) {
  var whatIsTheRemainder = (x % y === 0 ? "Yes":"No");
  return whatIsTheRemainder;
}
