'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const i in actions) {
    const { type, extraData = [], keysToRemove = [] } = actions[i];

    switch (type) {
      case 'addProperties':
        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;
      case 'removeProperties':
        for (const j in keysToRemove) {
          const key = keysToRemove[j];

          if (Object.prototype.hasOwnProperty.call(state, key)) {
            delete state[key];
          }
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
