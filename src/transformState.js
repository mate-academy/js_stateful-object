'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const arrayOfActionsValue = Object.values(actions);

  for (let i = 0; i < arrayOfActionsValue.length; i++) {
    if (arrayOfActionsValue[i].type === 'addProperties') {
      Object.assign(state, arrayOfActionsValue[i].extraData);
    }

    if (arrayOfActionsValue[i].type === 'removeProperties') {
      for (let j = 0; j < arrayOfActionsValue[i].keysToRemove.length; j++) {
        delete state[arrayOfActionsValue[i].keysToRemove[j]];
      }
    }

    if (arrayOfActionsValue[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
