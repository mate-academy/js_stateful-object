'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {

    if (action.type === 'addProperties') {
  
      for (const propertie in action.extraData) {
        state[propertie] = action.extraData[propertie];
      }
    }

    if (action.type === 'removeProperties') {

      for (const propertie of action.keysToRemove) {
        delete state[propertie];
      }
    }

    if (action.type === 'clear') {

      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
