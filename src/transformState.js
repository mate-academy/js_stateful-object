'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const parameter of actions) {
    if (parameter.type === 'addProperties') {
      Object.assign(state, parameter.extraData);
    }

    if (parameter.type === 'removeProperties') {
      for (const property of parameter.keysToRemove) {
        delete state[property];
      }
    }

    if (parameter.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
