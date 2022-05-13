'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;
      case 'addProperties':
        Object.assign(state, act.extraData);
        break;
      case 'removeProperties':
        for (const key of act.keysToRemove) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
