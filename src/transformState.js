'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const i of actions) {
    if (i.type === 'addProperties') {
      Object.assign(state, i.extraData);
    }

    if (i.type === 'removeProperties') {
      for (const x in i.keysToRemove) {
        delete state[i.keysToRemove[x]];
      }
    }

    if (i.type === 'clear') {
      for (const x in state) {
        delete state[x];
      }
    }
  }
}

module.exports = transformState;
