'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    if (act['type'] === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    } else if (act['type'] === 'addProperties') {
      for (const propad in act['extraData']) {
        state[propad] = act['extraData'][propad];
      }
    } else if (act['type'] === 'removeProperties') {
      for (const proprem of act['keysToRemove']) {
        if (proprem in state) {
          delete state[proprem];
        }
      }
    }
  }
}

module.exports = transformState;
