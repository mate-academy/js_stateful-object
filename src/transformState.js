'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    for (const e in key) {
      if (key[e] === 'addProperties') {
        for (const i in key) {
          if (i === 'extraData') {
            Object.assign(state, key.extraData);
          }
        }
      } else if (key[e] === 'removeProperties') {
        for (const i in key) {
          if (i === 'keysToRemove') {
            for (const f of key[i]) {
              for (const z in state) {
                if (z === f) {
                  delete state[z];
                }
              }
            }
          }
        }
      } else if (key[e] === 'clear') {
        for (const z in state) {
          delete state[z];
        }
      }
    }
  }
}

module.exports = transformState;
