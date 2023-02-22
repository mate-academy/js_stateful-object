'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const { type, extraData, keysToRemove } of actions) {
    switch ({
      type,
      extraData,
      keysToRemove,
    }.type) {
      case 'addProperties':
        Object.assign(state, {
          type,
          extraData,
          keysToRemove,
        }.extraData);
        break;

      case 'removeProperties':
        for (const arr of {
          type,
          extraData,
          keysToRemove,
        }.keysToRemove) {
          delete state[arr];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return 'Something wrong...';
    }
  }
}

module.exports = transformState;
