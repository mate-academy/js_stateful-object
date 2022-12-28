'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const transform of actions) {
    switch (transform.type) {
      case 'addProperties':
        Object.assign(state, transform.extraData);
        break;
      case 'removeProperties':
        transform.keysToRemove.forEach(keyToRemove =>
          delete state[keyToRemove]);
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
    }
  }
}

module.exports = transformState;
