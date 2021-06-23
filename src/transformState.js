'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      if (action[key] === 'addProperties') {
        Object.assign(state, action.extraData);
      }

      if (action[key] === 'removeProperties') {
        for (const propertyToRemove of action.keysToRemove) {
          delete state[propertyToRemove];
        }
      }

      if (action[key] === 'clear') {
        for (const property in state) {
          delete state[property];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
