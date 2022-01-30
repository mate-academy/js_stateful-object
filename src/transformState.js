'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const modifiedState = state;

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'clear':
        for (const key in modifiedState) {
          delete modifiedState[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties':
        for (let j = 0; j < actions[i].keysToRemove.length; j++) {
          if (actions[i].keysToRemove[j] in modifiedState) {
            delete modifiedState[actions[i].keysToRemove[j]];
          }
        }
    }
  }

  return modifiedState;
}

module.exports = transformState;
