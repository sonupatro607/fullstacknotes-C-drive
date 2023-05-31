// var start = null

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// function createList(arr){
//     for(var ele of arr){
//         if(start === null){
//             var temp_node = new Node(ele)
//             start = temp_node
//         }else{
//             var temp = start;
//             while(temp.next != null){
//                 temp = temp.next
//             }
//             var temp_node = new Node(ele)
//             temp.next = temp_node
//         }
//     }
// }

// createList([100,23,43,56,78,99,101])

// printList(start)

// function reverseList(){
//     var stack =[]
//     var temp = start
//     while(temp!=null){
//         stack.push(temp.value)
//         temp=temp.next
//     }
//     temp = start
//     while(temp!=null){
//         temp.value = stack.pop()
//         temp = temp.next
//     }

// }
// console.log("reversed list")
// reverseList()
// printList(start)

/*
----------------------------------------------------------------

*******************DOUBLE LINK LLIST************************

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

var start = null; // my list is currently empty
function createList(arr) {
  // convert arr in to a double linked list
  for (var e of arr) {
    if (start === null) {
      var new_node = new Node(e);
      start = new_node;
    } else {
      var temp = start;
      var temp_node = new Node(e);
      while (temp.next != null) {
        temp = temp.next;
      }

      temp.next = new_node;
      new_node.prev = temp;
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
createList([1, 2, 4, 3, 7, 6, 4]);

// printList(start);

// solution: 1, 2, 4, 3, 7, 6, 4;

function addToStart(value) {
  var new_node = new Node(value);
  if (start === null) {
    start = new_node;
  } else {
    new_node.next = start;
    start = new_node;
  }
}

// solution: -100, 1, 2, 4, 3, 7, 6, 4;

function deleteAtEnd() {
  if (start === null) {
    console.log("nothing to delete");
  }
  if (start.next === null) {
    start = null;
  } else {
    var temp = start;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  }
}

// solution: 1, 2, 4, 3, 7, 6;

function deleteFromStart() {
  if (start === null) {
    console.log("nothing to delete");
  } else {
    start = start.next;
  }
}

// solution: 2, 4, 3, 7, 6, 4;

function addAtEnd(value) {
  var new_node = new Node(value);
  if (start === null) {
    start = new_node;
  } else {
    while (temp.next != null) {
      temp = temp.next;
    }

    temp.next = new_node;
    new_node.prev = temp;
  }
}

// solution: 1, 2, 4, 3, 7, 6, 4, 1000;

// addToStart(-100);
// deleteAtEnd();
// addAtEnd(1000);
// deleteFromStart()
// printList(start);

function insertAtNth(value, position) {
  var new_node = new Node(value);
  var temp = start;
  while (position - 2 > 0) {
    temp = temp.next;
    position--;
  }
  new_node.next = temp.next;
  temp.next = new_node;
}

insertAtNth(1000, 5);
printList(start);

// solution:
// 1
// 2
// 4
// 3
// 1000
// 7
// 6
// 4



-------------------------------------------------------------

*****************CIRCULAR LINK LIST*****************



class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

var start = null; // my list is currently empty
function createList(arr) {
  // convert arr in to a double linked list
  for (var i = 0; i < arr.length; i++) {
    var new_node = new Node(arr[i]);
    if (start === null) {
      start = new_node;
    } else {
      var temp = start;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = new_node;
      if (i === arr.length - 1) {
        temp.next = start;
      }
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
createList([1, 2, 4, 3, 7, 6, 4]);

printList(start);

// solution:
// 1 2 3 4 5 6 1 2 3 4 5 6 1 2 3 4 5 6 1 2 3 4 5 6 ............so on


*/
