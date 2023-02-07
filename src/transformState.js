'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case ('addProperties'):
        Object.assign(state, action['extraData']);
        break;

      case ('removeProperties'):
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case ('clear'):
        for (const name in state) {
          delete state[name];
        }
        break;

      default: return 'Please, enter the valid data';
    }
  });
}

module.exports = transformState;
