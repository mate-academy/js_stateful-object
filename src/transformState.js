'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const currentAction of actions) {
    switch (currentAction.type) {
      case 'addProperties':
        Object.assign(state, currentAction.extraData);

        break;

      case 'removeProperties':
        const listToDelete = currentAction.keysToRemove;

        for (let i = 0; i < listToDelete.length; i++) {
          const currentDeleteKey = listToDelete[i];

          delete state[currentDeleteKey];
        }

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;
    }
  }
}

module.exports = transformState;
