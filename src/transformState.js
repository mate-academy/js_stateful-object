'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const result of actions) {
    switch (true) {
      case (result.type === 'addProperties'):
        const mas = Object.keys(result.extraData);

        for (const key of mas) {
          state[key] = result.extraData[key];
        }
        break;
      case (result.type === 'removeProperties'):
        for (const key of result.keysToRemove) {
          delete state[key];
        }
        break;
      case (result.type === 'clear'):
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
