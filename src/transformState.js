'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const newObj = {};

  for (const action of actions) {
    for (const key in action) {
      // console.log(key);
      if (action[key] === 'removeProperties') {
        delete
        state[action[key]];
      }
    }
  }

  console.log(state);
}

const state = {
  foo: 'bar', name: 'Jim', another: 'one',
};

transformState(state, [
  {
    type: 'removeProperties', keysToRemove: ['another'],
  },
  { type: 'clear' },
  { type: 'clear' },
  { type: 'clear' },
  {
    type: 'addProperties', extraData: { yet: 'another property' },
  },
  { type: 'clear' },
  {
    type: 'addProperties',
    extraData: {
      foo: 'bar', name: 'Jim',
    },
  },
  {
    type: 'removeProperties', keysToRemove: ['name', 'hello'],
  },
]);

// module.exports = transformState;
