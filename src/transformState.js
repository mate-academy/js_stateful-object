'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (object.type) {
      case 'addProperties':
        Object.assign(state, object.extraData);
        break;

      case 'removeProperties':
        for (const key of object.keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const remove in state) {
          if (state[remove]) {
            delete state[remove];
          }
        }
        break;
    }
  }
}
module.exports = transformState;
