'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const _addProperties = 'addProperties';
  const _removeProperties = 'removeProperties';
  const _clear = 'clear';

  for (const { type, extraData, keysToRemove } of actions) {
    switch (type) {
      case _addProperties:
        Object.assign(state, extraData);
        break;

      case _removeProperties:
        for (const removeKey of keysToRemove) {
          delete state[removeKey];
        }
        break;

      case _clear:
        Object.keys(state).forEach(key => delete state[key]);
        break;

      default:
        throw new Error(`Unknown action type: ${type}`);
    }
  }

  return state;
}

module.exports = transformState;
