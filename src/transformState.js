'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const operation = actions[i];
    const operationType = operation.type;

    switch (operationType) {
      case 'addProperties':
        Object.assign(state, operation.extraData);
        break;
      case 'removeProperties':
        for (let x = 0; x <= operation.keysToRemove.length; x++) {
          delete state[operation.keysToRemove[x]];
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
