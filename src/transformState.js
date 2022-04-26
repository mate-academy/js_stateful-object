'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      Object.assign(state, actions[key].extraData);
    } else if (actions[key].type === 'removeProperties') {
      for (const el of actions[key].keysToRemove) {
        delete state[el];
      }
    } else {
      for (const el in state) {
        delete state[el];
      }
    }
  }
}
module.exports = transformState;
