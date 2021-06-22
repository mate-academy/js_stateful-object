'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    for (const firstLevelKey in actions[i]) {
      if (actions[i][firstLevelKey] === 'clear') {
        for (const stateKey in state) {
          delete state[stateKey];
        }
      }

      if (firstLevelKey === 'extraData') {
        for (const secondLevelKey in actions[i][firstLevelKey]) {
          state[secondLevelKey] = actions[i][firstLevelKey][secondLevelKey];
        }
      }

      if (firstLevelKey === 'keysToRemove') {
        for (let j = 0; j < actions[i][firstLevelKey].length; j++) {
          for (const stateKey in state) {
            if (stateKey === actions[i][firstLevelKey][j]) {
              delete state[stateKey];
            }
          }
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
