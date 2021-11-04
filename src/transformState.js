'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionObjects of actions) {
    for (const action in actionObjects) {
      if (actionObjects[action] === 'addProperties') {
        for (const data in actionObjects['extraData']) {
          state[data] = actionObjects['extraData'][data];
        }
      } else if (actionObjects[action] === 'removeProperties') {
        for (const aKeyToRemove of actionObjects['keysToRemove']) {
          for (const sts in state) {
            if (sts === aKeyToRemove) {
              delete state[sts];
            }
          }
        }
      } else if (actionObjects[action] === 'clear') {
        for (const sts in state) {
          delete state[sts];
        }
      }
    }
  }
}

module.exports = transformState;
