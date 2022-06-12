'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elem of actions) {
    switch (true) {
      case elem.type === 'addProperties':
        for (const key in elem.extraData) {
          state[key] = elem.extraData[key];
        }
        break;
      case elem.type === 'removeProperties':
        for (const index of elem.keysToRemove) {
          delete state[index];
        }
        break;

      case elem.type === 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
