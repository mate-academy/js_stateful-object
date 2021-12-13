'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const element of actions) {
    for (const key in element) {
      switch (element[key]) {
        case 'removeProperties':
          for (let i = 0; i < element.keysToRemove.length; i++) {
            delete state[element.keysToRemove[i]];
          }
          break;

        case 'addProperties':
          Object.assign(state, element.extraData);
          break;

        case 'clear':
          for (const item in state) {
            delete state[item];
          }
          break;
      }
    }
  }
}

module.exports = transformState;
