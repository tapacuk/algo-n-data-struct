import { DoublyLinkedList } from './double-linked-list';
import { insertionSortArray } from './insertion-sort';
import { Student } from './student';

const BUCKET_COUNT = 10;

export function pocketSortList(list: DoublyLinkedList): DoublyLinkedList {
  const arr: Student[] = list.toArray();

  const buckets: Student[][] = [];
  for (let i = 0; i < BUCKET_COUNT; i++) {
    buckets.push([]);
  }

  for (const student of arr) {
    const ratio = student.getRatio();
    let index = Math.floor(ratio * BUCKET_COUNT); // key
    if (index >= BUCKET_COUNT) {
      index = BUCKET_COUNT - 1;
    }
    (buckets[index] as Student[]).push(student);
  }

  const sorted: Student[] = [];
  for (let i = 0; i < BUCKET_COUNT; i++) {
    const sortedBucket = insertionSortArray(buckets[i] as Student[]);
    for (const s of sortedBucket) {
      sorted.push(s);
    }
  }

  const sortedList = new DoublyLinkedList();
  sortedList.fromArray(sorted);
  return sortedList;
}
