'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties' :
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties' :
        for (let i = 0; i < action.keysToRemove.length; i++) {
          delete state[action.keysToRemove[i]];
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
