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
      const toRemove = obj.keysToRemove;

      for (const rem of toRemove) {
        delete state[rem];
      }
    }

    if (obj.type === 'clear') {
      for (const clear in state) {
        delete state[clear];
      }
    }
  }
}

module.exports = transformState;
