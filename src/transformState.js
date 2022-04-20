'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    }

    if (actions[i].type === 'removeProperties') {
      const propToDelete = actions[i].keysToRemove;

      for (let j = 0; j < propToDelete.length; j++) {
        delete state[propToDelete[j]];
      }
    }

    if (actions[i].type === 'clear') {
      for (const prop in state) {
        if (state.hasOwnProperty(prop)) {
          delete state[prop];
        }
      }
    }
  }
}

module.exports = transformState;
