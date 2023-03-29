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
        const actKeys = Object.keys(actions[n].extraData);
        const actVals = Object.values(actions[n].extraData);

        for (let i = 0; i < actKeys.length; i++) {
          state[actKeys[i]] = actVals[i];
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
