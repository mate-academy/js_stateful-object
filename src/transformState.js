'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const removeAction = 'removeProperties';
  const addAction = 'addProperties';
  const clearAction = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case addAction:
        Object.assign(state, action.extraData);
        break;

      case removeAction:
        action.keysToRemove.forEach(key => {
          delete state[key];
        });
        break;

      case clearAction:
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
