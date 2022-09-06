'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionsObject of actions) {
    if (actionsObject.type === 'addProperties') {
      Object.assign(state, actionsObject.extraData);
    } else if (actionsObject.type === 'removeProperties') {
      for (const toRemoveProperty of actionsObject.keysToRemove) {
        if (state.hasOwnProperty(toRemoveProperty)) {
          delete state[toRemoveProperty];
        }
      }
    } else if (actionsObject.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  };
}

module.exports = transformState;
