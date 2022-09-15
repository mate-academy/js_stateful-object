'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    let itemType;

    switch (true) {
      case item.type === 'addProperties':
        itemType = item.extraData;

        Object.assign(state, itemType);
        break;

      case item.type === 'removeProperties':
        itemType = item.keysToRemove;

        for (const key of itemType) {
          delete state[key];
        }
        break;

      default:
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
