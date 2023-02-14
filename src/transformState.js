'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const data in action.keysToRemove) {
          delete state[action.keysToRemove[data]];
        }
    }
  }
}

module.exports = transformState;
