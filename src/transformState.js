'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    if (item.type === 'clear') {
      for (const cleared in state) {
        delete state[cleared];
      }
    } else if (item.type === 'addProperties') {
      Object.assign(state, item.extraData);
    } else if (item.type === 'removeProperties') {
      for (const key of item.keysToRemove) {
        delete state[key];
      }
    } else {
      continue;
    }
  }

  return state;
}

module.exports = transformState;
