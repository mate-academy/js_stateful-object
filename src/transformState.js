'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    } else if (obj.type === 'removeProperties') {
      for (const el of obj.keysToRemove) {
        if (state.hasOwnProperty(el)) {
          delete state[el];
        }
      }
    } else if (obj.type === 'clear') {
      for (const deletedItem in state) {
        delete state[deletedItem];
      }
    }
  }

  return state;
}

module.exports = transformState;
