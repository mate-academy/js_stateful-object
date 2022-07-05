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
        action.keysToRemove.forEach(keyToRemove => {
          delete state[keyToRemove];
        });
        break;
      case 'clear':
        for (const prop in state) {
          delete state[prop];
        };
        break;
    }
  });

  return state;
}

module.exports = transformState;
