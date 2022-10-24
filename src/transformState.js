'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const i of action.keysToRemove) {
        if (state[i]) {
          delete state[i];
        }
      }
    }

    if (action.type === 'clear') {
      for (const element in state) {
        delete state[element];
      }
    }
  });

  return state;
}

module.exports = transformState;
