import type { Student } from './student';

export class Node {
  data: Student;
  prev: Node | null;
  next: Node | null;

  constructor(data: Student) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(student: Student): void {
    const node = new Node(student);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  toArray(): Student[] {
    const arr: Student[] = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  fromArray(arr: Student[]): void {
    this.head = null;
    this.tail = null;
    for (const student of arr) {
      this.append(student);
    }
  }

  print(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.data.toString());
      current = current.next;
    }
  }
}
