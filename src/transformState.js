'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const values = Object.values(actions[i]);

    for (let j = 0; j < values.length; j++) {
      if (values[j] === 'addProperties') {
        Object.assign(state, values[j + 1]);
      }

      if (values[j] === 'removeProperties') {
        for (let k = 0; k < values[j + 1].length; k++) {
          delete state[values[j + 1][k]];
        }
      }

      if (values[j] === 'clear') {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
