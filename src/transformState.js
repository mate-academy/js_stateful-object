'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;
    const ADD_PROPERTIES = 'addProperties';
    const REMOVE_PROPERTIES = 'removeProperties';
    const CLEAR = 'clear';

    switch (type) {
      case ADD_PROPERTIES:
        if (extraData && typeof extraData === 'object') {
          for (const [key, value] of Object.entries(extraData)) {
            state[key] = value;
          }
        }
        break;
      case REMOVE_PROPERTIES:
        if (keysToRemove && Array.isArray(keysToRemove)) {
          for (const key of keysToRemove) {
            if (state.hasOwnProperty(key)) {
              delete state[key];
            }
          }
        }
        break;
      case CLEAR:
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
