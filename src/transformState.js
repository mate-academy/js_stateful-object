'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      if (key === 'type') {
        if (action.type === 'clear') {
          Object.keys(state).forEach(n => delete state[n]);
        } else if (action.type === 'addProperties') {
          if (action.extraData) {
            Object.assign(state, action.extraData);
          }
        } else if (action.type === 'removeProperties') {
          if (action.keysToRemove) {
            for (const keyToRemove of action.keysToRemove) {
              if (keyToRemove in state) {
                delete state[keyToRemove];
              }
            }
          }
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
