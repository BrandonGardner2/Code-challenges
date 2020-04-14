// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
		if (!this.head) {
			this.head = node;
			this.tail = node;
			node.prev = null;
			node.next = null;
			return;
		}
		
		node.prev = null;
		node.next = this.head;
		this.head.prev = node;
		this.head = node;
  }

  setTail(node) {
    // Write your code here.
		if (!this.head) return this.setHead(node);
		
		node.next = null;
		node.prev = this.tail;
		this.tail.next = node;
		this.tail = node;
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
		// Clean the nodeToInsert references if they exist.
		if (nodeToInsert.prev || nodeToInsert.next) {
			this.remove(nodeToInsert);
		}
		
		if (node === this.head) this.setHead(nodeToInsert);
		else {
			node.prev.next = nodeToInsert;
			nodeToInsert.prev = node.prev;
			node.prev = nodeToInsert;
			nodeToInsert.next = node;
		}
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
		if (nodeToInsert.prev || nodeToInsert.next) {
			this.remove(nodeToInsert);
		}
		
		if (node === this.tail) this.setTail(nodeToInsert);
		else {
			nodeToInsert.next = node.next;
			node.next.prev = nodeToInsert;
			nodeToInsert.prev = node;
			node.next = nodeToInsert;
		}
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
		if (!this.head) return this.setHead(nodeToInsert);
		
		let current = this.head;
		
		for (let i = 1; i <= position; i++) {
			if (!current) {
				if (nodeToInsert.prev || nodeToInsert.next) {
					this.remove(nodeToInsert);
				}
				return this.setTail(nodeToInsert);
			}
			if (i === position) {
				this.insertBefore(current, nodeToInsert);
			};
			current = current.next;
		}
  }

  removeNodesWithValue(value) {
    // Write your code here.
		let current = this.head;
		
		while (current) {
			const next = current.next;
			if (current.value === value) {
				this.remove(current);
			}
			current = next;
		}
  }

  remove(node) {
    // Write your code here.
		if (node === this.head) this.head = this.head.next;
		if (node === this.tail) this.tail = this.tail.prev;
		
		if (node.next) node.next.prev = node.prev;
		if (node.prev) node.prev.next = node.next;
		node.prev = null;
		node.next = null;
  }

  containsNodeWithValue(value) {
    // Write your code here.
		let current = this.head;
		
		while (current) {
			if (current.value === value) return true;
			current = current.next;
		}
		
		return false;
  }
}

// Do not edit the line below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
