'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ADD_PROPS = 'addProperties';
  const REMOVE_PROPS = 'removeProperties';
  const CLEAR = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case ADD_PROPS: {
        Object.assign(state, action.extraData);
        break;
      }

      case REMOVE_PROPS: {
        action.keysToRemove.forEach(key => delete state[key]);
        break;
      }

      case CLEAR: {
        Object.keys(state).forEach(key => delete state[key]);
        break;
      }

      default:
        throw new Error(`Error in ${action.type} action type`);
    }
  }
}

module.exports = transformState;
