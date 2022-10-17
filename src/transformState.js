'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (obj.type === 'removeProperties') {
      for (const del of obj.keysToRemove) {
        delete state[del];
      }
    }

    if (obj.type === 'clear') {
      for (const el in state) {
        delete state[el];
      }
    }
  }
}

module.exports = transformState;
