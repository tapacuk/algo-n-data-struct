import { matchesCriteria } from './helpers';
import { Student } from './student';
import { TreeNode } from './tree-node';

export class BinaryTree {
  root: TreeNode | null = null;

  insert(student: Student) {
    const newNode = new TreeNode(student);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (student.ticketNumber === current.data.ticketNumber) return; // однакові ключі не додаються

      if (student.ticketNumber < current.data.ticketNumber) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  levelOrder() {
    const result: Student[] = [];

    if (this.root === null) {
      return result;
    }

    const queue = [this.root];

    while (queue.length > 0) {
      const node: TreeNode | undefined = queue.shift();
      if (node === undefined) {
        return result;
      }

      result.push(node.data);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    return result;
  }

  // студенти 2-го курсу що народилися взимку
  search(): Student[] {
    return this.levelOrder().filter(matchesCriteria);
  }

  private deleteNode(node: TreeNode | null, key: number) {
    if (node === null) return null;

    if (key < node.data.ticketNumber) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.data.ticketNumber) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let successor = node.right;
      while (successor.left !== null) {
        successor = successor.left;
      }

      node.data = successor.data;
      node.right = this.deleteNode(node.right, successor.data.ticketNumber);
    }

    return node; // якщо нічого не знаходиться повертаємо теперішню ноду для рекурсії
  }

  deleteMatching() {
    const keys = this.search().map((s) => s.ticketNumber);

    for (const key of keys) {
      this.root = this.deleteNode(this.root, key);
    }
  }
}
