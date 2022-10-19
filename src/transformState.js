'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    for (const prop in obj) {
      if (obj[prop] === 'addProperties') {
        Object.assign(state, obj.extraData);
      }

      if (obj[prop] === 'removeProperties') {
        for (const ch of obj.keysToRemove) {
          if (ch in state) {
            delete state[ch];
          }
        }
      }

      if (obj[prop] === 'clear') {
        for (const del in state) {
          delete state[del];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
