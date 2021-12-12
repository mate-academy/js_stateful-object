'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const element of actions) {
    for (const key in element) {
      if (element[key] === 'removeProperties') {
        for (let i = 0; i < element.keysToRemove.length; i++) {
          delete state[element.keysToRemove[i]];
        }
      }

      if (element[key] === 'addProperties') {
        Object.assign(state, element.extraData);
      }

      if (element[key] === 'clear') {
        for (const item in state) {
          delete state[item];
        }
      }
    }
  }
}

module.exports = transformState;
