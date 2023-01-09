'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        for (const keyword of action.keysToRemove) {
          delete state[keyword];
        };
        break;
      case 'clear':
        for (const properties of Object.keys(state)) {
          delete state[properties];
        };
        break;
    }
  }

  return state;
}

module.exports = transformState;
