import type { Student } from './student';

export class Node {
  student: Student;
  left: Node | null = null;
  right: Node | null = null;
  priority: number;

  constructor(student: Student) {
    this.student = student;
    this.priority = Math.random();
  }
}

export class RootBST {
  root: Node | null = null;

  search(key: string): Student | null {
    let current = this.root;

    while (current !== null) {
      if (current.student.lastName === key) {
        return current.student;
      }

      if (key < current.student.lastName) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  rotateRight(node: Node): Node {
    if (node.left === null) return node;

    const newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;

    return newRoot;
  }

  rotateLeft(node: Node): Node {
    if (node.right === null) return node;

    const newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;

    return newRoot;
  }

  insertRoot(node: Node | null, student: Student): Node {
    if (node === null) {
      return new Node(student);
    }

    if (student.lastName < node.student.lastName) {
      node.left = this.insertRoot(node.left, student);
      node = this.rotateRight(node);
    } else if (student.lastName > node.student.lastName) {
      node.right = this.insertRoot(node.right, student);
      node = this.rotateLeft(node);
    }

    return node;
  }

  add(student: Student): void {
    this.root = this.insertRoot(this.root, student);
  }

  printBFS(): void {
    if (this.root === null) {
      console.log('Дерево порожнє');
      return;
    }

    const queue: Node[] = [this.root];
    let output = '';

    while (queue.length > 0) {
      const current = queue.shift();
      if (current !== undefined && current !== null) {
        output += current.student.lastName + ' ';
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
      }
    }

    console.log('Обхід в ширину (BFS): ' + output);
  }
}
