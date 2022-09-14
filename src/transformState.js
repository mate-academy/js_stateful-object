'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const states = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(states, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete states[key];
        }
        break;

      case 'clear':
        for (const key in states) {
          delete states[key];
        }
        break;

      default:
        throw new Error('unknown action type');
    }
  }

  return states;
}

module.exports = transformState;
