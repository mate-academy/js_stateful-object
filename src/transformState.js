'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const add = 'addProperties';
  const remove = 'removeProperties';
  const clearProp = 'clear';

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action.type === add) {
      for (const [key, value] of Object.entries(action.extraData)) {
        state[key] = value;
      }
    }

    if (action.type === remove) {
      action.keysToRemove.forEach(key => {
        delete state[key];
      });
    }

    if (action.type === clearProp) {
      Object.keys(state).forEach(key => {
        delete state[key];
      });
    }
  }
}

module.exports = transformState;
