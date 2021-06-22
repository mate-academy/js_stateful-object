'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    for (const firstLevelKey in item) {
      if (item[firstLevelKey] === 'clear') {
        for (const stateKey in state) {
          delete state[stateKey];
        }
        continue;
      }

      switch (firstLevelKey) {
        case 'extraData':
          Object.assign(state, item[firstLevelKey]);
          break;

        case 'keysToRemove':
          for (let j = 0; j < item[firstLevelKey].length; j++) {
            for (const stateKey in state) {
              if (stateKey === item[firstLevelKey][j]) {
                delete state[stateKey];
              }
            }
          }
          break;
      }
    }
  }

  return state;
}

module.exports = transformState;
