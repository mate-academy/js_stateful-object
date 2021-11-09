'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    if (i.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (i.type === 'removeProperties') {
      for (const rem of i.keysToRemove) {
        for (const key in state) {
          if (key === rem) {
            delete state[key];
          }
        }
      }
    }

    if (i.type === 'addProperties') {
      Object.assign(state, i.extraData);
    }
  }

  return state;
}

module.exports = transformState;
