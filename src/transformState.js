'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformstateate(state, actions) {
  for (const e of actions) {
    switch (e.type) {
      case 'addProperties':
        Object.assign(state, e.extraData);
        break;

      case 'removeProperties':
        for (const propRemove of e.keysToRemove) {
          delete state[propRemove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformstateate;
