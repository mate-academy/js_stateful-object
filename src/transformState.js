'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < actions.length; i++) {
    for (const key in actions[i]) {
      switch (true) {
        case actions[i][key] === 'addProperties':
          Object.assign(state, actions[i].extraData);
          break;

        case actions[i][key] === 'removeProperties':
          for (let j = 0; j < (actions[i].keysToRemove).length; j++) {
            delete state[actions[i].keysToRemove[j]];
          }
          break;

        case actions[i][key] === 'clear':
          for (const key2 in state) {
            delete state[key2];
          }
          break;
      }
    }
  }
}

module.exports = transformState;
