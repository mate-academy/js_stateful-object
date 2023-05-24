'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const addAction = 'addProperties';
  const removeAction = 'removeProperties';
  const clearAction = 'clear';

  actions.forEach(action => {
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
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      default:
        break;
    }
  });
}

module.exports = transformState;
