'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const param of actions) {
    if (param['type'] === 'addProperties') {
      Object.assign(state, param['extraData']);
    }

    if (param['type'] === 'removeProperties') {
      for (const i of param['keysToRemove']) {
        delete state[i];
      }
    }

    if (param['type'] === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
