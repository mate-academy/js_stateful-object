'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const current of actions) {
    switch (current.type) {
      case 'addProperties': Object.assign(state, ...[current.extraData]);
        break;

      case 'removeProperties':
        const removeKeys = current.keysToRemove;

        removeKeys.forEach(function(item, i) {
          delete state[item];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
