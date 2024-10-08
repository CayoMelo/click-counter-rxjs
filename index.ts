import { fromEvent } from 'rxjs';
import { map, scan } from 'rxjs/operators';

//create observable that emits click events
const source = fromEvent(document.getElementById('btn'), 'click');

const example = source.pipe(
  scan((acc, curr) => acc + 1, 0)
);

const subscribe = example.subscribe(console.log);

