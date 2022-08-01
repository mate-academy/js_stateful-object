'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < actions.length; i++) {
    const arr = Object.values(actions[i]);

    if (arr[0] === 'addProperties') {
      const data = arr[1];

      for (const key in data) {
        state[key] = data[key];
      }
    }

    if (arr[0] === 'removeProperties') {
      const data = arr[1];

      for (let j = 0; j < data.length; j++) {
        delete state[data[j]];
      }
    }

    if (arr[0] === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
