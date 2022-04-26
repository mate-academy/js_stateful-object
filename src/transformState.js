'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let output = {};

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        output = Object.assign({}, state, actions[i].extraData);
        break;

      case 'clear':
        output = {};
        break;

      case 'removeProperties':
        for (const key in state) {
          if (actions[i].keysToRemove.indexOf(key) === -1) {
            output[key] = state[key];
          }
        }
    }
  }

  return output;
}

module.exports = transformState;
