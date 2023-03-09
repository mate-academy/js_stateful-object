'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const elem of actions) {
    switch (elem.type) {
      case 'addProperties':
        Object.assign(state, elem.extraData);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const key of elem.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
    }
  }

  return (state);
}

module.exports = transformState;
