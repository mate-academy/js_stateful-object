'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    const actionToDo = actions[key];

    switch (actionToDo.type) {
      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;

      case 'addProperties':
        Object.assign(state, actionToDo.extraData);
        break;

      case 'removeProperties':
        for (const azione in actionToDo.keysToRemove) {
          const toDelete = actionToDo.keysToRemove[azione];

          delete state[toDelete];
        }
        break;

      default:
        throw new Error('unknown action');
    }
  }

  return state;
}

module.exports = transformState;
