'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let key = 0; key < actions.length; key++) {
    if (actions[key].type === 'addProperties') {
      Object.assign(state, actions[key].extraData);
    } else if (actions[key].type === 'removeProperties') {
      for (let i = 0; i < actions[key].keysToRemove.length; i++) {
        delete state[`${actions[key].keysToRemove[i]}`];
      }
    } else if (actions[key].type === 'clear') {
      for (const j in state) {
        delete state[j];
      }
    }
  }
}

module.exports = transformState;
