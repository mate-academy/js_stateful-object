'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    if (actions[action].type === 'addProperties') {
      for (const a in actions[action].extraData) {
        state[a] = actions[action].extraData[a];
      }
    }

    if (actions[action].type === 'removeProperties') {
      for (const r in actions[action].keysToRemove) {
        delete state[actions[action].keysToRemove[r]];
      }
    }

    if (actions[action].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
