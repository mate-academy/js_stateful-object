'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;

      case 'removeProperties':
        for (const act in action.keysToRemove) {
          delete state[action.keysToRemove[act]];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
    }
  }
}

module.exports = transformState;
