// This file contains the implementation of a singly linked list in
// JavaScript.
/**
 * This class is of Node
 * @class Node
 * @property {number} val - The value to be stored in the node
 * @property {Node} next - The next node in the list
 * @constructor
 * @param {number} val - The value to be stored in the node
 * @returns {Node} - The new node
 * @example
 * const node = new Node(5);
 * console.log(node.val); // 5
 * console.log(node.next); // null
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}




/**
 * Class for a Singly Linked List
 * @class SinglyLinkedList
 * @property {Node} head - The first node in the list
 * @property {Node} tail - The last node in the list
 * @property {number} length - The number of nodes in the list
 * @constructor
 * @returns {SinglyLinkedList} - The new list
 */
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add a node to the end of the list
    pushNode(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Remove the last node from the list
    popNode() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    // Remove the first node from the list
    shift() {
        if (!this.head) return undefined;
        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    // Add a node to the beginning of the list
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Get the node at a specific index
    getNode(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // Set the value of a node at a specific index
    setNode(index, val) {
        const foundNode = this.getNode(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // Insert a node at a specific index
    insertNode(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.pushNode(val);
        if (index === 0) return !!this.unshift(val);

        const newNode = new Node(val);
        const prevNode = this.getNode(index - 1);
        const temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // Remove a node at a specific index
    removeNode(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.popNode();

        const prevNode = this.getNode(index - 1);
        const removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    // Reverse the linked list
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    // Traverse the linked list and log the values to console
    traverseLL() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}


