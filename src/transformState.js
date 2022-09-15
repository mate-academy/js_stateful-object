'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionsObject of actions) {
    switch (actionsObject.type) {
      case 'addProperties':
        Object.assign(state, actionsObject.extraData);
        break;
      case 'removeProperties':
        for (const toRemoveProperty of actionsObject.keysToRemove) {
          if (state.hasOwnProperty(toRemoveProperty)) {
            delete state[toRemoveProperty];
          }
        };
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
    }
  };
}

module.exports = transformState;
