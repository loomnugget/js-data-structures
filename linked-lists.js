// Javascript implementations of linked lists

// Create a Node
function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
// Test Lists
const array = [1,2,3,4,5];
const head = new Node(1, new Node(1, new Node(2, new Node(2, new Node(3, new Node(4, new Node(4)))))));
const list1 = new Node(1, new Node(2, new Node(3)));
const list2 = new Node(4, new Node(5, new Node(6)));

//TODO:
//1. Merge Sort
//2. Find kth to last element of linked list recursively
//3. Move Node


function traverse(root) {
  if (root === null) {
    return 0;
  }
  let sum = root.value;
  var leftsum = traverse(root.left);
  var rightsum = traverse(root.right);
  sum =  root.value + leftsum + rightsum;

  return sum;
}


// TODO: Move Node
function move(source, dest) {
  if(!source) console.log('error');

}
//move(list1, list2);

// Remove duplicates from sorted list - iterative
function remove(head) {
  if (head === null) return null;
  if (head.next === null) return head;

  let previous = head;
  let current = head.next;

  while(current !== null) {
   if(previous.data === current.data) {
      previous.next = current.next;
      current = current.next;
   } else {
    previous = current;
    current = current.next;
   }
  }
  return head;
}

// Iterative Reverse
// We need to keep track of previous, current and next nodes starting with head,
// since links have to be broken while the list is being traversed
function reverse2(head) {
  if (head === null) return null;
  if (head.next === null) return head;
  // Start off with current as head and previous as the node before head(starts off as null)
  let current = head;
  let previous = null;
  let next = null;
  while(current !== null) {
    //First keep track of link between current and next node
    next = current.next;
    // Break the link between the current and next node
    // Create a new link to the previous node
    current.next = previous;
    // Move the previous node and current node ahead one position at a time
    previous = current;
    current = next;
  }
  // When current node is null, previous node is at the end
  // Previous node becomes the new head of the list
  return previous;
}

// Recursive Reverse
function reverse(head) {
  // if there is no head, return null
  if (head === null) return null;
  // if there is only one element in the list, return it
  if (head.next===null) return head;
  // rest of the list after head
  let rest = head.next;
  // break off head
  head.next = null;
  let reversed = reverse(rest);
  rest.next = head;
  return reversed;
}

// Iteratively count intstances of interger
function count(head, data) {
  var current = head;
  var count = 0;
  while(current !== null) {
    if (current.data ===data) {
      count++;
    }
  current = current.next;
  }
  return count;
}

// Recursively count instances of interger
function count2(head, data) {
  if (!head) return 0;
  return (head.data === data ? 1 : 0) + count(head.next, data);
}

// Append node to end of linked list
function addToList(head, data){
  var current = head;
  while(current.next) {
    current = current.next;
  }
  current.next = new Node(data);
  return head;
}

// Create a linked list from an array
const toList = array => {
  var node = new Node(array[0]);
  for(var i = 1; i < array.length; i++){
    addToList(node, array[i]);
  }
  return node.next.next.next;
}

// Add two linked lists together iteratively
const append = (A,B) => {
  let current = A;
  let head2 = B;
  if (!A && !B) {
    return null;
  }
  if(!A) return B;
  if(!B) return A;

  while (current.next !== null) {
    current = current.next;
  }
  if(current.next === null) {
    current.next = head2;
  }
  return A;
}

// Get Length of List
const length = head => {
  return head !== null ? length(head.next) + 1 : 0;
}

// Stringify List
const stringify = list => {
  return (list===null) ? "null" : `${list.data} -> ` + stringify(list.next);
}
