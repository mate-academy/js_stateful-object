'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const user of actions) {
    switch (user.type) {
      case 'removeProperties':
        for (const remove of user.keysToRemove) {
          delete state[remove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case 'addProperties':
        Object.assign(state, user.extraData);
    }
  }

  return state;
}
module.exports = transformState;
