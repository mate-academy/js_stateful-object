'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const elem of actions) {
    switch (elem.type) {
      case 'addProperties':
        Object.assign(state, elem.extraData);
        break;
      case 'removeProperties':

        for (const item in elem.keysToRemove) {
          delete state[elem.keysToRemove[item]];
        }
        break;
      case 'clear':
        for (const item in state) {
          delete state[item];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
