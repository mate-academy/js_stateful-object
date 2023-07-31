'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const TYPE_ADD_PROPERTIES = 'addProperties';
  const TYPE_REMOVE_PROPERTIES = 'removeProperties';
  const TYPE_CLEAR = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case TYPE_ADD_PROPERTIES: {
        Object.assign(state, action.extraData);
        break;
      }

      case TYPE_REMOVE_PROPERTIES: {
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
      }

      case TYPE_CLEAR: {
        for (const key in state) {
          delete state[key];
        }
        break;
      }
      default: return 'undefined type';
    }
  }
}

module.exports = transformState;
