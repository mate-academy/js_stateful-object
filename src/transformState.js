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
    switch (action.type) {
      case 'clear':
        Object
          .keys(state)
          .forEach(K => delete state[K]);
        break;
      case 'removeProperties':
        Object
          .values(action.keysToRemove)
          .forEach(K => delete state[K]);
        break;

      default:
        for (const [K, V] of Object.entries(action.extraData)) {
          state[K] = V;
        }
    }
  }
}

module.exports = transformState;
