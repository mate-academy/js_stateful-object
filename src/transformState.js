'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'addProperties':
        Object.assign(state, act.extraData);
        break;

      case 'removeProperties':
        for (const KeyToRemove of act.keysToRemove) {
          delete state[KeyToRemove];
        }
        break;

      case 'clear':
        for (const key in state) {
          if (key) {
            delete state[key];
          }
        }
        break;

      default:
        throw new Error('Unexpected action type');
    }
  }

  return state;
}

module.exports = transformState;
