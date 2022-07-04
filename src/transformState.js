'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(state, key.extraData);
    } else if (key.type === 'removeProperties') {
      for (const keyToDel of key.keysToRemove) {
        delete state[keyToDel];
      }
    } else if (key.type === 'clear') {
      for (const keyOfState in state) {
        delete state[keyOfState];
      }
    }
  }

  return state;
}

module.exports = transformState;
