'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const obj in actions) {
    const action = Object.assign({}, actions[obj]);
    let data;

    switch (action.type) {
      case 'addProperties':
        data = action.extraData;

        for (const key in data) {
          state[key] = data[key];
        }
        break;

      case 'removeProperties':
        data = action.keysToRemove;

        for (const key in data) {
          delete state[data[key]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
