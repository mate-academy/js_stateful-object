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
        for (const ch of obj.keysToRemove) {
          if (ch in state) {
            delete state[ch];
          }
        }
        break;

      case 'clear':
        for (const del in state) {
          delete state[del];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
