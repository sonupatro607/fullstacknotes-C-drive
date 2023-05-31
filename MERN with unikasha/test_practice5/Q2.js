var arr = [3, 4, 7, -8, 7, 9, 0, 3, 1, 6];
var prevsum = 0;
for (var i = 0; i < arr.length - 1; i++) {
  var sum = 0;
  for (var j = i + 1; j < arr.length; j++) {
    sum = arr[i] + arr[j];
    if (sum > prevsum) {
      prevsum = sum;
    }
  }
}
console.log(prevsum);
