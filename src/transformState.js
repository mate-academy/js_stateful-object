'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const value of actions) {
    if (value.type === 'addProperties') {
      Object.assign(state, value.extraData);
    }

    if (value.type === 'removeProperties') {
      for (const removeValue of value.keysToRemove) {
        delete state[`${removeValue}`];
      }
    }

    if (value.type === 'clear') {
      for (const clearKey in state) {
        if (state.hasOwnProperty(clearKey)) {
          delete state[clearKey];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
