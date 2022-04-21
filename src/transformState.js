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
      for (const property in parameter.keysToRemove) {
        delete state[parameter['keysToRemove'][property]];
      }
    }

    if (parameter.type === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }

  return state;
}

module.exports = transformState;
