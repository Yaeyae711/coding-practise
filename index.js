function checkPair(arr, val, size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[i] + arr[j] == val) {
        console.log(`the value pair is ${arr[j]} and ${arr[i]}`);
        return true;
      }
    }
  }
}

var array = [1, 21, 3, 14, 5, 60, 7, 6];
var value = 1000;
var sizeOfArray = array.length;

if (checkPair(array, value, sizeOfArray)) {
  console.log("pair exist");
} else {
  console.log("pair do not exist");
}