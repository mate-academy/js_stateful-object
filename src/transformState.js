'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const el of actions) {
    if (el.type === 'addProperties') {
      Object.assign(state, el.extraData);
    }

    if (el.type === 'removeProperties') {
      for (const keysRemove of el.keysToRemove) {
        delete state[keysRemove];
      }
    }

    if (el.type === 'clear') {
      for (const key in state) {
        if (state.hasOwnProperty([key])) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
