'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.map(({ type, keysToRemove, extraData }) => {
    switch (type) {
      case 'clear':
        Object.keys(state).map(key => delete state[key]);
        break;

      case 'removeProperties':
        keysToRemove.map(key => state[key] && delete state[key]);
        break;

      case 'addProperties':
        Object.assign(state, extraData);
    }
  });

  return state;
}

module.exports = transformState;
