export type CharClass = 'upper' | 'digit' | 'underscore' | 'other';

export function getCharClass(ch: string): CharClass {
  if (ch >= 'A' && ch <= 'Z') return 'upper';
  if (ch >= '0' && ch <= '9') return 'digit';
  if (ch === '_') return 'underscore';

  return 'other';
}
