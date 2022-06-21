'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const property of actions) {
    switch (true) {
      case property.type === 'addProperties':
        Object.assign(state, property.extraData);
        break;

      case property.type === 'removeProperties':
        for (const key of property.keysToRemove) {
          delete state[key];
        }
        break;

      case property.type === 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
