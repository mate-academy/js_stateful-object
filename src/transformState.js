'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action.type === 'clear') {
      for (const stateKey in state) {
        delete state[stateKey];
      }
    } else if (action.type === 'addProperties') {
      const addObject = action.extraData;

      for (const addKey in addObject) {
        state[addKey] = addObject[addKey];
      }
    } else if (action.type === 'removeProperties') {
      const removeArray = action.keysToRemove;

      for (const removeKey of removeArray) {
        delete state[removeKey];
      }
    }
  }
}

module.exports = transformState;
