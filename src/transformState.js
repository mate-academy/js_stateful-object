'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const currentAction of actions) {
    if (currentAction.type === 'addProperties') {
      Object.assign(state, currentAction.extraData);
    }

    if (currentAction.type === 'removeProperties') {
      const listToDelete = currentAction.keysToRemove;

      for (let i = 0; i < listToDelete.length; i++) {
        const currentDeleteKey = listToDelete[i];

        if (state.hasOwnProperty(currentDeleteKey)) {
          delete state[currentDeleteKey];
        }
      }
    }

    if (currentAction.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
