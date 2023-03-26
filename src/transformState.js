'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const element of actions) {
    switch (element.type) {
      case 'addProperties':
        Object.assign(state, element.extraData);
        break;
      case 'removeProperties':

        for (const item in element.keysToRemove) {
          delete state[element.keysToRemove[item]];
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
