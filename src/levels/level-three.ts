import * as fs from 'fs';
import * as path from 'path';

import { type CharClass, getCharClass } from '../char-class';
import { State, ACCEPTING_STATES } from '../states';

type TransitionTable = Map<State, Map<CharClass, State>>;

function buildTable() {
  const table = new Map();

  const row = (entries: [CharClass, State][]): Map<CharClass, State> => {
    const map = new Map<CharClass, State>();
    for (const [cls, st] of entries) {
      map.set(cls, st);
    }
    return map;
  };

  table.set(
    State.Q0,
    row([
      ['upper', State.Q1],
      ['digit', State.ERR],
      ['underscore', State.ERR],
      ['other', State.ERR],
    ]),
  );
  table.set(
    State.Q1,
    row([
      ['upper', State.Q2],
      ['digit', State.Q6],
      ['underscore', State.Q3],
      ['other', State.ERR],
    ]),
  );
  table.set(
    State.Q2,
    row([
      ['upper', State.Q2],
      ['digit', State.Q6],
      ['underscore', State.Q3],
      ['other', State.ERR],
    ]),
  );
  table.set(
    State.Q3,
    row([
      ['upper', State.Q4],
      ['digit', State.Q5],
      ['underscore', State.ERR],
      ['other', State.ERR],
    ]),
  );
  table.set(
    State.Q4,
    row([
      ['upper', State.Q4],
      ['digit', State.ERR],
      ['underscore', State.ERR],
      ['other', State.ERR],
    ]),
  );
  table.set(
    State.Q5,
    row([
      ['upper', State.ERR],
      ['digit', State.Q5],
      ['underscore', State.ERR],
      ['other', State.ERR],
    ]),
  );
  table.set(
    State.Q6,
    row([
      ['upper', State.ERR],
      ['digit', State.Q6],
      ['underscore', State.ERR],
      ['other', State.ERR],
    ]),
  );
  table.set(
    State.ERR,
    row([
      ['upper', State.ERR],
      ['digit', State.ERR],
      ['underscore', State.ERR],
      ['other', State.ERR],
    ]),
  );

  return table;
}

function analyzeTableBased(word: string, table: TransitionTable): boolean {
  let state: State = State.Q0;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (ch === undefined) {
      return false;
    }

    const cls: CharClass = getCharClass(ch);
    const stateRow = table.get(state);

    if (stateRow === undefined) {
      return false;
    }

    const nextSt = stateRow.get(cls);

    if (nextSt === undefined) {
      return false;
    }

    state = nextSt;

    if (state === State.ERR) {
      return false;
    }
  }

  return ACCEPTING_STATES.has(state);
}

export function runLevel3(): void {
  const table = buildTable();
  const filePath = path.join(__dirname, '../data/words3.txt');
  const content = fs.readFileSync(filePath, 'utf-8');

  const words = content
    .split(/[$@]/)
    .map((w) => w.trim())
    .filter((w) => w !== '');

  console.log('Рівень 3: синтаксичний аналізатор на основі таблиці переходів');
  console.log('Роздільники: $ @');
  console.log('');

  for (const word of words) {
    const valid = analyzeTableBased(word, table);
    console.log('  ' + word + ' -> ' + (valid ? '+' : '-'));
  }
}
