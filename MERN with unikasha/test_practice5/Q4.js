// function operation(str) {
//   var a = str.split(" ");
//   var stack = [];
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] == 2 || a[i] == 3 || a[i] == 1 || a[i] == 9) {
//       stack.push(a[i]);
//     } else {
//       let val1 = stack.pop();
//       let val2 = stack.pop();

//       switch ((c = a[i])) {
//         case "+":
//           stack.push(val1 + val2);
//           break;

//         case "-":
//           stack.push(val1 - val2);
//           break;

//         case "*":
//           stack.push(val1 * val2);
//           break;
//       }
//     }
//   }
//   return stack.pop();
// }
// var b = operation("2 3 1 * + 9 -");
// console.log(b);

function operation(str) {
  var a = str.split(" ");
  var stack = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] == 2 || a[i] == 3 || a[i] == 1 || a[i] == 9) {
      stack.push(a[i]);
    } else {
      let val1 = stack.pop();
      let val2 = stack.pop();

      if (a[i] === "*") {
        stack.push(val1 * val2);
      } else if (a[i] === "+") {
        stack.push(val1 + val2);
      } else if (a[i] === "-") {
        stack.push(val1 - val2);
      }
    }
  }
  return stack.pop();
}

var b = operation("2 3 1 * + 9 -");
console.log(b);
