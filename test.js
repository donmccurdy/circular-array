const test = require('tape');
const { CircularArray } = require('./');

test('basic', (t) => {
  t.plan(4);

  const a = new CircularArray(3);

  a.push(1);
  t.deepEqual(a.array(), [1]);

  a.push(2);
  t.deepEqual(a.array(), [1, 2]);

  a.push(3);
  t.deepEqual(a.array(), [1, 2, 3]);

  a.push(4);
  t.deepEqual(a.array(), [4, 2, 3]);
});
