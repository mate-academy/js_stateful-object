'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  if (actions.length === 0) {
    return state;
  }

  for (const property of actions) {
    if (property.type === 'removeProperties') {
      for (const action of property.keysToRemove) {
        delete state[action];
      }
    }

    if (property.type === 'addProperties') {
      Object.assign(state, property.extraData);
    }

    if (property.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return (state);
}

module.exports = transformState;
