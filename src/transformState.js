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
        for (const removeProperti of action.keysToRemove) {
          delete state[removeProperti];
        }
        break;

      case 'clear':
        for (const stateElement in state) {
          delete state[stateElement];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
