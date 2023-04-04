'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let n = 0; n < actions.length; n++) {
    switch (actions[n].type) {
      case 'addProperties':
        const actionEntries = Object.entries(actions[n].extraData);

        for (const [key, value] of actionEntries) {
          state[key] = value;
        }

        break;

      case 'removeProperties':
        for (let i = 0; i < actions[n].keysToRemove.length; i++) {
          delete state[actions[n].keysToRemove[i]];
        }

        break;

      case 'clear':
        const stateKeys = [ ...Object.keys(state) ];

        for (let i = 0; i < stateKeys.length; i++) {
          delete state[stateKeys[i]];
        }
    }
  }

  return state;
}

module.exports = transformState;
