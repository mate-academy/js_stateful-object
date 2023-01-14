'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i in actions) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties':
        for (const j of actions[i].keysToRemove) {
          delete state[j];
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

module.exports = transformState;
