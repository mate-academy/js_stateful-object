'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionsArr of actions) {
    if (actionsArr.type === 'addProperties') {
      Object.assign(state, actionsArr.extraData);
    }

    if (actionsArr.type === 'removeProperties') {
      for (const toRemove of actionsArr.keysToRemove) {
        delete state[toRemove];
      }
    }

    if (actionsArr.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
