'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let records = {};

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const data in state) {
          delete state[data];
        }
        break;
      case 'addProperties':
        records = action.extraData;

        for (const record in records) {
          state[record] = records[record];
        }
        break;
      case 'removeProperties':
        const removes = action.keysToRemove;

        for (const remove of removes) {
          for (const data in state) {
            if (remove === data) {
              delete state[data];
            }
          }
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
