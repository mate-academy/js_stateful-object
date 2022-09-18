'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    let itemType;

    switch (item.type) {
      case 'addProperties':
        itemType = item.extraData;

        Object.assign(state, itemType);
        break;

      case 'removeProperties':
        itemType = item.keysToRemove;

        for (const key of itemType) {
          delete state[key];
        }
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
