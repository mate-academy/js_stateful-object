'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const keys in actions) {
    switch (actions[keys].type) {
      case 'addProperties':
        Object.assign(state, actions[keys].extraData);
        break;

      case 'removeProperties':

        for (const remove in actions[keys].keysToRemove) {
          delete state[actions[keys].keysToRemove[remove]];
        }
        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
    }
  }

  return state;
}

module.exports = transformState;
