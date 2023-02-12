'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const values = Object.values(action);

    if (values[0] === 'addProperties') {
      for (const el in values[1]) {
        state[el] = values[1][el];
      }
    }

    if (values[0] === 'removeProperties') {
      for (const el of values[1]) {
        delete state[el];
      }
    }

    if (values[0] === 'clear') {
      for (const el in state) {
        delete state[el];
      }
    }
  }
}

module.exports = transformState;
