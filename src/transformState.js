'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const properties of actions) {
    if (properties.type === 'addProperties') {
      Object.assign(state, properties.extraData);
    } else if (properties.type === 'removeProperties') {
      for (const key of properties.keysToRemove) {
        delete state[key];
      }
    } else {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
