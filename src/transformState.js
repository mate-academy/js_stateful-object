'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const act of actions) {
    const { type, extraData, keysToRemove } = act;

    switch (type) {
      case 'addProperties' :
        Object.assign(state, extraData);
        break;

      case 'removeProperties' :
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        return 'action does not exit';
    }
  }

  return state;
}

module.exports = transformState;
