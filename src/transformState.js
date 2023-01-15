'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const type = action.type;

    switch (type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const keysRemove of action.keysToRemove) {
          delete state[keysRemove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
        default: return 'Unknown action type';
    }
  }
}

module.exports = transformState;
