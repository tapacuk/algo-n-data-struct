import * as readline from 'readline';
import { getCharClass } from '../char-class';
import { State, ACCEPTING_STATES } from '../states';

function nextState(current: State, ch: string): State {
  const cls = getCharClass(ch);

  switch (current) {
    case State.Q0:
      switch (cls) {
        case 'upper':
          return State.Q1;
        default:
          return State.ERR;
      }

    case State.Q1:
      switch (cls) {
        case 'upper':
          return State.Q2;
        case 'underscore':
          return State.Q3;
        case 'digit':
          return State.Q6;
        default:
          return State.ERR;
      }

    case State.Q2:
      switch (cls) {
        case 'upper':
          return State.Q2;
        case 'underscore':
          return State.Q3;
        case 'digit':
          return State.Q6;
        default:
          return State.ERR;
      }

    case State.Q3:
      switch (cls) {
        case 'upper':
          return State.Q4;
        case 'digit':
          return State.Q5;
        default:
          return State.ERR;
      }

    case State.Q4:
      switch (cls) {
        case 'upper':
          return State.Q4;
        default:
          return State.ERR;
      }

    case State.Q5:
      switch (cls) {
        case 'digit':
          return State.Q5;
        default:
          return State.ERR;
      }

    case State.Q6:
      switch (cls) {
        case 'digit':
          return State.Q6;
        default:
          return State.ERR;
      }

    default:
      return State.ERR;
  }
}

export function analyzeSwitchBased(word: string): boolean {
  let state: State = State.Q0;

  for (const ch of word) {
    state = nextState(state, ch);

    if (state === State.ERR) {
      return false;
    }
  }

  return ACCEPTING_STATES.has(state);
}

export function runLevel2(): Promise<void> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log('Рівень 2: синтаксичний аналізатор на основі switch');

    rl.question('введіть слово: ', (input) => {
      const word = input.trim();
      const valid = analyzeSwitchBased(word);

      console.log(
        '  слово "' + word + '": ' + (valid ? 'правильне' : 'неправильне'),
      );

      rl.close();
      resolve();
    });
  });
}
