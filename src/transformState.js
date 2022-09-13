'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    if (type === 'addProperties') {
      Object.assign(state, extraData);
    } else if (type === 'removeProperties') {
      for (const item of keysToRemove) {
        if (Object.keys(state).filter(elem => elem === item)) {
          delete state[item];
        }
      }
    } else {
      for (const bit of Object.keys(state)) {
        delete state[bit];
      }
    }
  }
}

module.exports = transformState;
