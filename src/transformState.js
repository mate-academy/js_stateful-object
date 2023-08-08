'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, action) {
  for (const obj of action) {
    // to iterate all objects in array.
    for (const [key, value] of Object.entries(obj)) {
      // to iterate every object and split on keys and values.
      //
      // conditions check
      if (obj[key] === obj.type && value === 'clear') {
        for (const ke of Object.keys(state)) {
          delete state[ke];
        }
      }

      if (obj[key] === obj.extraData) {
        // add key and value to the object
        for (const [k, v] of Object.entries(obj[key])) {
          state[k] = v;
        }
      }

      if (obj[key] === obj.keysToRemove) {
        // delete properies
        for (const k of obj[key]) {
          delete state[k];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
