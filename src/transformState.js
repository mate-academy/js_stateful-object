'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const transform of actions) {
    switch (transform.type) {
      case 'addProperties':
        Object.assign(state, transform.extraData);
        break;

      case 'removeProperties':
        for (const remove of transform.keysToRemove) {
          delete state[remove];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
