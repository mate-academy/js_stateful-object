'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  // console.log(actions);
  // console.log(state);

  for (const action of actions) {
    // add properties
    if (action.type === 'addProperties') {
      const keysToAdd = Object.keys(action.extraData);

      for (const keyToAdd of keysToAdd) {
        state[keyToAdd] = action.extraData[keyToAdd];
      }
    }

    // remove properties
    if (action.type === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        delete state[keyToRemove];
      }
    }
  }
}

module.exports = transformState;
