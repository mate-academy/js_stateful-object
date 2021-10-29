'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    const { type, extraData, keysToRemove } = act;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        keysToRemove.forEach(keys => {
          delete state[keys];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return state;
    }
  }
}

module.exports = transformState;
