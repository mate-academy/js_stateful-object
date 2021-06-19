'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const values = Object.values(action);

    for (let i = 0; i < values.length; i++) {
      if (values[i] === 'addProperties') {
        Object.assign(state, values[i + 1]);
      }

      if (values[i] === 'clear') {
        for (const key in state) {
          delete state[key];
        }
      }

      if (values[i] === 'removeProperties') {
        for (const key of values[i + 1]) {
          delete state[key];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
