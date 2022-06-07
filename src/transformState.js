'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((action) => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const keys of action.keysToRemove) {
          delete state[keys];
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
        break;
    }
  });

  return state;
}

module.exports = transformState;
