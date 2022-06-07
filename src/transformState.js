'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const types of actions) {
    if (types.type === 'addProperties') {
      for (const key in types.extraData) {
        state[key] = types.extraData[key];
      }
    }

    if (types.type === 'removeProperties') {
      for (const rem of types.keysToRemove) {
        delete state[`${rem}`];
      }
    }

    if (types.type === 'clear') {
      for (const clear in state) {
        delete state[`${clear}`];
      }
    }
  }

  return state;
}

module.exports = transformState;
