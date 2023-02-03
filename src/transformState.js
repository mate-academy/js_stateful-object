'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    switch (i.type) {
      case 'addProperties':
        Object.assign(state, i.extraData);
        break;

      case 'removeProperties':
        for (const index of i.keysToRemove) {
          delete state[index];
        }
        break;

      case 'clear' :
        for (const itemClearState in state) {
          delete state[itemClearState];
        }
        break;
    }
  }
}

module.exports = transformState;
