'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const element in actions) {
    const { type, extraData, keysToRemove } = element;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
    }

    switch (type) {
      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
    }

    switch (type) {
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
    }
    break;
  }

  return state;
}

module.exports = transformState;
