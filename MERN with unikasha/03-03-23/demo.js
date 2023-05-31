/*

// question: create a function to reverese first half of a single linked list of even size.
// 1 2 3 4 5 6 7 8

// output:
// 4 3 2 1 5 6 7 8

// answer: (doubt)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
var start = null; // if start is null , it means our list is currently empty
function createList(arr) {
  for (var ele of arr) {
    if (start === null) {
      var temp_node = new Node(ele);
      start = temp_node;
    } else {
      var temp = start;
      var temp_node = new Node(ele);
      while (temp.next != null) {
        temp = temp.next;
      }
      
      temp.next = temp_node;
    }
  }
}

function printList(start) {
  var temp = start;
  while (temp !== null) {
    console.log(temp.value);
    temp = temp.next;
  }
}

createList([1, 2, 4, 3, 7, 6, 4, 8]);

function halfreverse() {
  var stack = [];
  var temp = start;

  var i = 0;
  while (i <= arr.length/2) {
    stack.push(temp.value);
    temp = temp.next;
    i++;
  }
  var i = 0;
  while (i <= stack.length - 1) {
    temp.value = stack.pop();
    temp = temp.next;
    i++;
  }
}
halfreverse();
printList(start);

*/
