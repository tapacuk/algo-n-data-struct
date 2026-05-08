import { BinarySearch, Node } from './binary-search';
import { Student } from './student';

export class RandomizedBST extends BinarySearch {
  insert(node: Node | null, student: Student): Node {
    if (node === null) {
      return new Node(student);
    }

    if (student.lastName < node.student.lastName) {
      node.left = this.insert(node.left, student);

      if (node.left !== null && node.left.priority > node.priority) {
        node = this.rotateRight(node);
      }
    } else if (student.lastName > node.student.lastName) {
      node.right = this.insert(node.right, student);

      if (node.right !== null && node.right.priority > node.priority) {
        node = this.rotateLeft(node);
      }
    }

    return node;
  }

  override add(student: Student): void {
    this.root = this.insert(this.root, student);
  }
}
