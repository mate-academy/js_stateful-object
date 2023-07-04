'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(key => delete state[key]);
        break;
      case 'clear':
        if (Object.keys(state).length > 0) {
          Object.keys(state).forEach(key => delete state[key]);
        }
        break;
      default:
        return state;
    }
  }

  return state;
}

module.exports = transformState;
