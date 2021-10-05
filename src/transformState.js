'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { extraData, keysToRemove } = action;

    switch (action.type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
      case 'removeProperties':
        keysToRemove.forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
