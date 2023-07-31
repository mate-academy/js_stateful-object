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
    if (action.type === TYPE_ADD_PROPERTIES) {
      Object.assign(state, action.extraData);
    }

    if (action.type === TYPE_REMOVE_PROPERTIES) {
      for (const key of action.keysToRemove) {
        delete state[key];
      }
    }

    if (action.type === TYPE_CLEAR) {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
