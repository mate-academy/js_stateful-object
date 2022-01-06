'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elem in actions) {
    if (actions[elem].type === 'addProperties') {
      Object.assign(state, actions[elem].extraData);
    }

    if (actions[elem].type === 'removeProperties') {
      for (const dk in actions[elem].keysToRemove) {
        delete state[actions[elem].keysToRemove[dk]];
      }
    }

    if (actions[elem].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
  // return n;
}
module.exports = transformState;
