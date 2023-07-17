'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const member of actions) {
    switch (member.type) {
      case 'addProperties':
        for (const key in member.extraData) {
          state[key] = member.extraData[key];
        } break;

      case 'removeProperties':
        for (const item of member.keysToRemove) {
          delete state[item];
        } break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        } break;

      default :
        break;
    }
  }
}

module.exports = transformState;
