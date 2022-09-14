'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const type of actions) {
    switch (type.type) {
      case 'addProperties':
        Object.assign(state, type.extraData);
        break;

      case 'removeProperties':
        for (const key of type.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        Object.keys(state).forEach(key => (delete state[key]));
        break;

      default:
        return;
    }
  }

  return state;
}

module.exports = transformState;
