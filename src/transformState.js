'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let records = {};

  for (const action of actions) {
    for (const key in action) {
      if (action[key] === 'clear') {
        for (const data in state) {
          delete state[data];
        }
      }

      if (key === 'extraData') {
        records = action[key];

        for (const record in records) {
          state[record] = records[record];
        }
      }

      if (key === 'keysToRemove') {
        const removes = action[key];

        for (const remove of removes) {
          for (const data in state) {
            if (remove === data) {
              delete state[data];
            }
          }
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
