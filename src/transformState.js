'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const number in actions) {
    const { type, extraData, keysToRemove } = actions[number];

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        for (const i in keysToRemove) {
          delete state[keysToRemove[i]];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
