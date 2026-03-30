export const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const printStructure = (arr: any[]) => {
  const parts: string[] = [];
  for (const item of arr) {
    parts.push(String(item));
  }
  console.log(parts.join(' '));
};
