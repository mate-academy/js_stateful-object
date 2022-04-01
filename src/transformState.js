'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i]['type']) {
      case 'addProperties':
        Object.assign(state, actions[i]['extraData']);
        break;

      case 'removeProperties':
        for (let x = 0; x < actions[i]['keysToRemove'].length; x++) {
          delete state[actions[i]['keysToRemove'][x]];
        }
        break;

      case `clear`:
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        continue;
    }
  }

  return state;
}

module.exports = transformState;
