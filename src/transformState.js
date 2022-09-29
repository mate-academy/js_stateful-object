'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      const addProp = action.extraData;

      for (const prop in addProp) {
        state[prop] = addProp[prop];
      }
    }

    if (action.type === 'removeProperties') {
      const removeProp = action.keysToRemove;

      for (const prop of removeProp) {
        delete state[prop];
      }
    }

    if (action.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }

  return state;
}

module.exports = transformState;
