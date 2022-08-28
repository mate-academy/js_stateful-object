'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const result of actions) {
    switch (result.type) {
      case ('addProperties'):
        const mas = Object.keys(result.extraData);

        for (const key of mas) {
          state[key] = result.extraData[key];
        }
        break;
      case ('removeProperties'):
        for (const key of result.keysToRemove) {
          delete state[key];
        }
        break;
      case ('clear'):
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
