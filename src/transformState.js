'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

/*
const state = {
  foo: 'bar', name: 'Jim', another: 'one',
};

transformState(state, [
  { type: 'clear' },
]);

console.log(state)
*/

function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    } else if (action.type === 'removeProperties') {
      for (const K of Object.values(action.keysToRemove)) {
        delete state[K];
      }
    } else {
      for (const [K, V] of Object.entries(action.extraData)) {
        state[K] = V;
      }
    }
  }
}

module.exports = transformState;
