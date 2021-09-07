'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i]['type'] === 'addProperties') {
      for (const key in actions[i]['extraData']) {
        state[key] = actions[i]['extraData'][key];
      }
    }

    if (actions[i]['type'] === 'removeProperties') {
      actions[i]['keysToRemove'].forEach(j => delete state[j]);
    }

    if (actions[i]['type'] === 'clear') {
      for (const k in state) {
        delete state[k];
      }
    }
  }

  return state;
}

module.exports = transformState;
