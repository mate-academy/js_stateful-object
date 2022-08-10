'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < actions.length; i++) {
    const arr = Object.values(actions[i]);
    const data = arr[1];

    switch (arr[0]) {
      case 'addProperties':
        for (const key in data) {
          state[key] = data[key];
        }
        break;

      case 'removeProperties':
        for (let j = 0; j < data.length; j++) {
          delete state[data[j]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
    }
  }
}

module.exports = transformState;
