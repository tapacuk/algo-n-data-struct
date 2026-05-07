import { Student } from './student';

export function generateStudents(): Student[] {
  const result = [];
  const surnames = [
    'Мельник',
    'Шевченко',
    'Коваленко',
    'Бондаренко',
    'Ткаченко',
    'Ковальчук',
    'Кравченко',
    'Олійник',
    'Поліщук',
    'Ткачук',
    'Шевчук',
    'Мороз',
    'Лисенко',
    'Марченко',
    'Руденко',
    'Савченко',
    'Петренко',
    'Клименко',
    'Павленко',
    'Коваль',
  ];

  result.push(new Student('Шевченко', 3, 'F-2', 100));

  let i = 1;

  while (result.length < 20) {
    const missed = Math.floor(Math.random() * 200);
    result.push(
      new Student(surnames[i - 1]!, (i % 5) + 1, `F-${i % 3}`, missed),
    );
    i++;
  }

  return result;
}

export function sortStudents(arr: Student[]) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i]!;
    let j = i - 1;
    while (j >= 0 && arr[j]!.missedClasses > key.missedClasses) {
      arr[j + 1] = arr[j]!;
      j--;
    }
    arr[j + 1] = key;
  }
}

export function binarySearch(arr: Student[], target: number): Student | null {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const student = arr[mid];

    if (!student) {
      return null;
    }

    if (student.missedClasses === target) {
      return student;
    }

    if (student.missedClasses < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
}
