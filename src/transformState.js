'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    } else if (action.type === 'removeProperties') {
      const removeKeys = action.keysToRemove.values();

      for (const key of removeKeys) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    } else if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });

  return state;
}

module.exports = transformState;
