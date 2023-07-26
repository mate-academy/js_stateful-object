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
        const actionData = action.extraData;

        if (typeof actionData === 'object') {
          Object.assign(state, actionData);
        }

        break;
      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        });

        break;
      case 'clear':
        Object.keys(state).forEach(key => {
          delete state[key];
        });

        break;
      default:
        throw new Error(`Error: ${action.type} is an invalid action type!`);
    }
  }

  return state;
}

module.exports = transformState;
