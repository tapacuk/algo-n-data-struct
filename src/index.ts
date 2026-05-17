import { runLevel1 } from './levels/level-one';
import { runLevel3 } from './levels/level-three';
import { runLevel2 } from './levels/level-two';

async function main() {
  runLevel1();
  console.log('');
  await runLevel2();
  console.log('');
  runLevel3();
}

main();
