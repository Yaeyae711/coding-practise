function isPallindrome(string) {
  //   console.log(string);
  var strlength = string.length;
  //   console.log(strlength);
  if (strlength === 0 || strlength === 1) {
    return "it is pallindrome";
  }
  if (string[0] === string[strlength - 1]) {
    isPallindrome(string.slice(1, strlength - 1));
    return "it is pallindrome";
  }
  return "it is not a pallindrome";
}

var palString = "guy";
console.log(isPallindrome(palString));
