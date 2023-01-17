'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const property of actions) {
    switch (property.type) {
      case 'addProperties':
        Object.assign(state, property.extraData);
        break;

      case 'removeProperties':
        for (const item of property.keysToRemove) {
          delete state[item];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
