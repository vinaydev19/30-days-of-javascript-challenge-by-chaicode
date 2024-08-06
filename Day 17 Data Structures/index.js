class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const node1 = new Node(10);
const node2 = new Node(10, node1);
const node3 = new Node(node1, node2);
console.log(node1);
console.log(node2);
console.log(node3);
