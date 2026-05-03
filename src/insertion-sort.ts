import { DoublyLinkedList } from './double-linked-list';
import { Student } from './student';

export function insertionSortArray(arr: Student[]): Student[] {
  const result: Student[] = [...arr];

  for (let i = 1; i < result.length; i++) {
    const current: Student = result[i]!;
    let j = i - 1;

    while (j >= 0 && (result[j] as Student).getRatio() > current.getRatio()) {
      result[j + 1] = result[j] as Student;
      j--;
    }

    result[j + 1] = current;
  }

  return result;
}

export function insertionSortList(list: DoublyLinkedList): DoublyLinkedList {
  const arr: Student[] = list.toArray();

  const arrSorted = insertionSortArray(arr);

  const sortedList = new DoublyLinkedList();
  sortedList.fromArray(arrSorted);
  return sortedList;
}
