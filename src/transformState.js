'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const property of actions) {
    if (property.type === 'addProperties') {
      Object.assign(state, property.extraData);
    }

    if (property.type === 'removeProperties') {
      for (const key of property.keysToRemove) {
        delete state[key];
      }
    }

    if (property.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
};

module.exports = transformState;
