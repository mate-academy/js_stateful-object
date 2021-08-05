'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        Object.keys(state).forEach(n => delete state[n]);
        break;

      case 'addProperties':
        if (action.extraData) {
          Object.assign(state, action.extraData);
        }
        break;

      case 'removeProperties':
        if (action.keysToRemove) {
          for (const key of action.keysToRemove) {
            if (key in state) {
              delete state[key];
            }
          }
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
