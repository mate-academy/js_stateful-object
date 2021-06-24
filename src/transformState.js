'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    if (i.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    } else if (i.type === 'removeProperties') {
      const values = Object.values(i.keysToRemove);

      for (const x of values) {
        if (state[x]) {
          delete state[x];
        }
      }
    } else if (i.type === 'addProperties') {
      Object.assign(state, i.extraData);
    }
  }

  return state;
}

module.exports = transformState;
