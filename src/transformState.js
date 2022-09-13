'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    let itemType;

    if (item.type === 'addProperties') {
      itemType = item.extraData;

      Object.assign(state, itemType);
    } else if (item.type === 'removeProperties') {
      itemType = item.keysToRemove;

      for (const key of itemType) {
        delete state[key];
      }
    } else if (item.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
