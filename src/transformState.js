'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ('addProperties'):
        Object.assign(state, action.extraData);
        break;

      case ('removeProperties'):
        for (let i = 0; i < action.keysToRemove.length; i++) {
          const propertyToDelete = action.keysToRemove[i];

          delete state[propertyToDelete];
        };
        break;

      case ('clear'):
        for (const key in state) {
          delete state[key];
        };
        break;

      default:
        return 'Error';
    }
  }
}

module.exports = transformState;
