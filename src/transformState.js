'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const actionType = action.type;

    switch (actionType) {
      case 'addProperties':
        const extraData = action.extraData;

        Object.assign(state, extraData);

        break;

      case 'removeProperties':
        const keysToRemove = action.keysToRemove;

        keysToRemove.forEach(key => {
          delete state[key];
        });

        break;

      case 'clear':
        const stateKeys = Object.keys(state);

        stateKeys.forEach(key => {
          delete state[key];
        });

        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
