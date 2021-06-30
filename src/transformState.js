'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const actionsKeys of actions) {
    for (const key in actionsKeys) {
      switch (actionsKeys[key]) {
        case 'addProperties':
          Object.assign(state, actionsKeys.extraData);
          break;

        case 'removeProperties':
          for (let j = 0; j < (actionsKeys.keysToRemove).length; j++) {
            delete state[actionsKeys.keysToRemove[j]];
          }
          break;

        case 'clear':
          for (const key2 in state) {
            delete state[key2];
          }
          break;
      }
    }
  }
}

module.exports = transformState;
