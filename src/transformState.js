'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        (Object.assign(state, action['extraData']));
        break;

      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const keyToDelete of action['keysToRemove']) {
          delete state[keyToDelete];
        }
        break;

      default:
    }
  }

  return state;
}

module.exports = transformState;
