'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'clear':
        for (const K in state) {
          delete state[K];
        }
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(K => delete state[K]);
        break;
      case 'addProperties':
        Object.assign(state, action.extraData);
    }
  });
}

module.exports = transformState;
