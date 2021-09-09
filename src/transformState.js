'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i in actions) {
    switch (actions[i]['type']) {
      case 'addProperties':
        for (const key in actions[i]['extraData']) {
          state[key] = actions[i]['extraData'][key];
        };
        break;

      case 'removeProperties':
        actions[i]['keysToRemove'].forEach(j => delete state[j]);
        break;

      case 'clear':
        for (const k in state) {
          delete state[k];
        }
    }
  }

  return state;
}

module.exports = transformState;
