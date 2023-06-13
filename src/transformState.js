'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const ADD_PROPERTIES = 'addProperties';
  const REMOVE_PROPERTIES = 'removeProperties';
  const CLEAR = 'clear';

  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case ADD_PROPERTIES: {
        const { extraData } = action;

        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;
      }

      case REMOVE_PROPERTIES: {
        const { keysToRemove } = action;

        for (const key of keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      }

      case CLEAR: {
        for (const key in state) {
          delete state[key];
        }
        break;
      }

      default:
        throw new Error(`Action error with ${type}`);
    }
  }
}

module.exports = transformState;
