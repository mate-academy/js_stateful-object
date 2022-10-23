'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ('addProperties'):
        Object.assign(state, action.extraData);
        break;

      case ('removeProperties'):
        for (const removed of action.keysToRemove) {
          delete state[removed];
        }
        break;
      case ('clear'):
        Object.keys(state).forEach(removed => delete state[removed]);
        break;

      default:
        throw new Error('Action type is invalid');
    }
  }

  return state;
}

module.exports = transformState;
