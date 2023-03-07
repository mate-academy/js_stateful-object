'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        action.keysToRemove.forEach(key => {
          if (key in state) {
            delete state[key];
          }
        });
        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
    }
  });
}

module.exports = transformState;
