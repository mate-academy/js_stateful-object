'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    switch (actions[action].type) {
      case 'addProperties':
        Object.assign(state, actions[action].extraData);
        break;

      case 'removeProperties':
        for (const removable in actions[action].keysToRemove) {
          delete state[actions[action].keysToRemove[removable]];
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
