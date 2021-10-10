'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    for (const lit in key) {
      if (key[lit] === 'addProperties') {
        Object.assign(state, key.extraData);
      } else if (key[lit] === 'removeProperties') {
        for (const y of key.keysToRemove) {
          delete state[y];
        }
      } else if (key[lit] === 'clear') {
        for (const part in state) {
          delete state[part];
        }
      }
    }
  }
}

module.exports = transformState;
