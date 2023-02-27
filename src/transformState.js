'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'clear':
        const keys = Object.keys(state);

        for (let j = 0; j < keys.length; j++) {
          delete state[keys[j]];
        }
        break;

      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      default:
        for (const t of obj.keysToRemove) {
          delete state[t];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
