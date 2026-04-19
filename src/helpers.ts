import { Student } from './student';

export function matchesCriteria(student: Student) {
  const month = student.birthDate.getMonth() + 1;
  const isWinter = month === 12 || month === 1 || month === 2;

  return student.course === 2 && isWinter;
}

function formatDate(date: Date) {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();

  return `${d}.${m}.${y}`;
}

export function printTable(students: Student[]) {
  if (students.length === 0) {
    console.log('(порожньо)');
    return;
  }

  console.log(
    'Прізвище'.padEnd(16) +
      "Ім'я".padEnd(13) +
      'Курс'.padEnd(7) +
      'Квиток'.padEnd(10) +
      'Дата народження',
  );

  for (const s of students) {
    console.log(
      s.lastName.padEnd(16) +
        s.firstName.padEnd(13) +
        String(s.course).padEnd(7) +
        String(s.ticketNumber).padEnd(10) +
        formatDate(s.birthDate),
    );
  }

  console.log(`Всього записів: ${students.length}`);
}
