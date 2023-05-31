// *****************************LINK LIST ***************************

// ************SINGLE LINK LIST************

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
      while (temp.next != null) {
        temp = temp.next;
      }
      var temp_node = new Node(ele);
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

// createList([1, 2, 4, 3, 7, 6, 4, 8]);

// printList(start);

// function addToStart(value) {
//   var new_node = new Node(value);
//   if (start === null) {
//     start = new_node;
//   } else {
//     new_node.next = start;
//     start = new_node;
//   }
// }

// function addToEnd(value) {
//   var new_node = new Node(value);
//   if (start === null) {
//     start = new_node;
//   } else {
//     var temp = start;
//     while (temp.next != null) {
//       temp = temp.next;
//     }
//     temp.next = new_node;
//   }
// }

// addToStart(100);
// //printList(start)

// addToEnd(1000);
// printList(start);

// function deleteFromStart() {
//   if (start === null) {
//     console.log("list is empty,can not delete");
//   } else {
//     start = start.next;
//   }
// }

// function deleteFromEnd() {
//   if (start === null) {
//     console.log("list is empty, can not delete");
//   } else {
//     var temp = start;
//     while (temp.next.next != null) {
//       temp = temp.next;
//     }
//     temp.next = null;
//   }
// }

// deleteFromStart();
// deleteFromEnd();
// //printList(start)

// function findSize() {
//   var temp = start;
//   var size = 0;
//   while (temp != null) {
//     size++;
//     temp = temp.next;
//   }

//   return size;
// }
// console.log(findSize());

// function insertAtNth(value, pos) {
//   var new_node = new Node(value);
//   var temp = start;
//   while (pos - 2 > 0) {
//     temp = temp.next;
//     pos--;
//   }
//   new_node.next = temp.next;
//   temp.next = new_node;
// }
// // console.log("trying to insert 100 at 3rd position");
// insertAtNth(100, 3);
// // printList(start);
