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
        obj.keysToRemove.forEach(e => delete state[e]);
        break;
      case 'clear':
        Object.keys(state).forEach(e => delete state[e]);
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
