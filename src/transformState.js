'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, [...array]) {
  const result = state;

  for (const key of array) {
    for (const value in key) {
      if (value === 'type' && key[value] !== 'clear') {
        continue;
      } else if (value === 'extraData') {
        Object.assign(result, key[value]);
      } else if (value === 'keysToRemove') {
        for (const inner in key[value]) {
          delete result[key[value][inner]];
        }
      } else if (key[value] === 'clear') {
        for (const keys in result) {
          delete result[keys];
        }
      } else {
        return result;
      }
    }
  }

  return result;
}

module.exports = transformState;
