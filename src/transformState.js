'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let keys = [];
  let result = state;

  for (const act of actions) {
    switch (act.type) {
      case 'addProperties':
        result = Object.assign(result, act.extraData);
        break;

      case 'removeProperties':
        keys = act.keysToRemove;

        for (const key of keys) {
          delete result[key];
        }
        break;

      default: for (const st in state) {
        delete result[st];
      }
    }
  }

  return result;
}

module.exports = transformState;
