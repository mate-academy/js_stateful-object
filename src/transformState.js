'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i].type;

    if (action === 'clear') {
      for (const stateKey in state) {
        delete state[stateKey];
      }
    } else if (action === 'addProperties') {
      const addObject = actions[i].extraData;

      for (const addKey in addObject) {
        state[addKey] = addObject[addKey];
      }
    } else if (action === 'removeProperties') {
      const removeArray = actions[i].keysToRemove;

      for (const removeKey of removeArray) {
        delete state[removeKey];
      }
    }
  }
}

module.exports = transformState;
