'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;
      case 'removeProperties':
        for (const key of obj.keysToRemove) {
          if (key in state) {
            delete state[key];
          }
        }
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
      default:
        return state;
    }
  }
}

module.exports = transformState;
