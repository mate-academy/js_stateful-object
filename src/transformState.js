'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const property of actions) {
    switch (property.type) {
      case 'addProperties':
        Object.assign(state, property.extraData);
        break;

      case 'removeProperties':
        for (const names of property.keysToRemove) {
          delete state[names];
        }
        break;

      case 'clear':
        for (const allProprety in state) {
          delete state[allProprety];
        }
    }
  }
}
module.exports = transformState;
