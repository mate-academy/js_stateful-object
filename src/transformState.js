'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    if (i.type === 'addProperties') {
      Object.assign(state, i.extraData);
    }

    if (i.type === 'removeProperties') {
      for (const index of i.keysToRemove) {
        for (const itemState in state) {
          if (index === itemState) {
            delete state[itemState];
          }
        }
      }
    }

    if (i.type === 'clear') {
      for (const itemClearState in state) {
        delete state[itemClearState];
      }
    }
  }
}

module.exports = transformState;
