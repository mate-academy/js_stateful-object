'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      const data = Object.entries(action.extraData);

      for (const item of data) {
        state[item[0]] = item[1];
      }
    }

    if (action.type === 'removeProperties') {
      for (const prop of action.keysToRemove) {
        if (state.hasOwnProperty(prop)) {
          delete state[prop];
        }
      }
    }

    if (action.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
