'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, action) {
  const CLEAR = 'clear';

  for (const obj of action) {
    for (const [key, value] of Object.entries(obj)) {
      if (obj[key] === obj.type && value === CLEAR) {
        for (const ke of Object.keys(state)) {
          delete state[ke];
        }
      }

      if (obj[key] === obj.extraData) {
        Object.assign(state, obj.extraData);
      }

      if (obj[key] === obj.keysToRemove) {
        for (const k of obj[key]) {
          delete state[k];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
