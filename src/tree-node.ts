import { Student } from './student';

export class TreeNode {
  data: Student;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(data: Student) {
    this.data = data;
  }
}
