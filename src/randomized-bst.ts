import { BinarySearch, Node } from './binary-search';
import { Student } from './student';

export class RandomizedBST extends BinarySearch {
  insertTreap(node: Node | null, student: Student): Node {
    if (node === null) {
      return new Node(student);
    }

    if (student.lastName < node.student.lastName) {
      node.left = this.insertTreap(node.left, student);

      if (node.left !== null && node.left.priority > node.priority) {
        node = this.rotateRight(node);
      }
    } else if (student.lastName > node.student.lastName) {
      node.right = this.insertTreap(node.right, student);

      if (node.right !== null && node.right.priority > node.priority) {
        node = this.rotateLeft(node);
      }
    }

    return node;
  }

  override add(student: Student): void {
    this.root = this.insertTreap(this.root, student);
  }
}
