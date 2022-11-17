'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (true) {
      case action.type === 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case action.type === 'removeProperties':
        action.keysToRemove.forEach(key => delete state[key]);
        break;
      case action.type === 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  });

  return state;
}

module.exports = transformState;
