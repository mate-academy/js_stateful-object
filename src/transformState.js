'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }

    if (actions[key].type === 'addProperties') {
      Object.assign(state, actions[key].extraData);
    }

    if (actions[key].type === 'removeProperties') {
      for (const azione in actions[key].keysToRemove) {
        delete state[actions[key].keysToRemove[azione]];
      }
    }
  }
}

module.exports = transformState;
