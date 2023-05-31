class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
var start = null;
function createlist(arr) {
  for (var val of arr) {
    if (start === null) {
      var temp_node = new Node(val);
      start = temp_node;
    } else {
      var temp = start;
      var temp_node = new Node(val);
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = temp_node;
    }
  }
}
function printlist(start) {
  var temp = start;
  while (temp !== null) {
    console.log(temp.value);
    temp = temp.next;
  }
}

createlist([10, 11, 12, 13, 14]);
printlist(start);
