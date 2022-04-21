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
      property.keysToRemove
        .forEach(key => delete state[key]);
    }

    if (property.type === 'clear') {
      Object.keys(state)
        .forEach(key => delete state[key]);
    }
  }

  return state;
}

module.exports = transformState;
