'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        for (const key in obj.extraData) {
          state[key] = obj.extraData[key];
        };
        break;
      case 'removeProperties':
        obj.keysToRemove.forEach(el => delete state[el]);
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        return;
    };
  };

  return state;
}

module.exports = transformState;
