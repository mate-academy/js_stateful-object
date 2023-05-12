'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const meaning in actions) {
    const point = actions[meaning];

    for (const keys in point) {
      const intermediate = point[keys];

      if (keys === 'extraData') {
        Object.assign(state, intermediate);
      }

      if (keys === 'keysToRemove') {
        for (let i = 0; i < intermediate.length; i++) {
          delete state[intermediate[i]];
        }
      }

      if (point[keys] === 'clear') {
        for (const n in state) {
          delete state[n];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
