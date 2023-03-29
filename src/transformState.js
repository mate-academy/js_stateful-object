'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':

        Object.assign(state, extraData);
        break;

      case 'removeProperties':

        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':

        for (const del in state) {
          // used for in because for of does not work(
          // Uncaught TypeError: state is not iterable)
          delete state[del];
        }
        break;

      default:
        return `ERROR. wrong data ${type}`;
    }
  }

  return state;
}

module.exports = transformState;
