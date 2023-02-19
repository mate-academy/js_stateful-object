'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const user of actions) {
    if (user.type === 'removeProperties') {
      for (const remove of user.keysToRemove) {
        delete state[remove];
      }
    }

    if (user.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (user.type === 'addProperties') {
      Object.assign(state, user.extraData);
    }
  }

  return state;
}

module.exports = transformState;
