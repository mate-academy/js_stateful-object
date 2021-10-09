'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  let step = 0;

  for (const obj of actions) {
    for (const key in obj) {
      if (obj[key] === 'clear') {
        for (const property in state) {
          if (state.hasOwnProperty(property)) {
            delete state[property];
          }
        }
      }

      if (key === 'extraData') {
        Object.assign(state, actions[step].extraData);
      }

      if (key === 'keysToRemove') {
        for (const value of actions[step].keysToRemove) {
          delete state[value];
        }
      }
    }

    step++;
  }
}

module.exports = transformState;
