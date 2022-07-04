'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformstateate(state, actions) {
  for (const e of actions) {
    if (e.type === 'addProperties') {
      Object.assign(state, e.extraData);
    }

    if (e.type === 'removeProperties') {
      for (const propRemove of e.keysToRemove) {
        delete state[propRemove];
      }
    }

    if (e.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformstateate;
