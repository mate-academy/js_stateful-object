'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }
        break;

      case 'addProperties':
        for (const add in action) {
          if (add === 'extraData') {
            Object.assign(state, action[add]);
          }
        }
        break;

      case 'removeProperties':
        for (const input of action.keysToRemove) {
          delete state[input];
        }
    }
  }

  return state;
}

module.exports = transformState;
