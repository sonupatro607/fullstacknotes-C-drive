var arr = [1, 7, 4, 9, 3, -2, -9, , 65];
var target = 3;
var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 1 || arr[i] == 4 || arr[i] == -2) {
    count = count + arr[i];
  }
}
console.log(count);
if (count == target) {
  console.log("true");
} else {
  console.log("false");
}
