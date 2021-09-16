'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let modifiedState = Object.assign(state);

  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        modifiedState = Object.assign(modifiedState, action.extraData);
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          delete modifiedState[key];
        });
        break;
      default:
        if (Object.keys(modifiedState).length === 0) {
          break;
        }

        for (const key in modifiedState) {
          delete modifiedState[key];
        }
        break;
    }
  });

  return modifiedState;
}

module.exports = transformState;
