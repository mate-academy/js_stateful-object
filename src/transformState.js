'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const mainAction = actions[i].type;

    switch (mainAction) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'addProperties':
        for (const key in actions[i].extraData) {
          state[key] = actions[i].extraData[key];
        }
        break;

      case 'removeProperties':
        if (actions[i].keysToRemove !== undefined) {
          const toRemove = actions[i].keysToRemove;

          for (let j = 0; j < toRemove.length; j++) {
            delete state[toRemove[j]];
          }
        }
    }
  }

  return state;
}

module.exports = transformState;
