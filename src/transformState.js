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
        object.keysToRemove.forEach(element => {
          delete state[element];
        });
        break;

      case 'clear':
        Object.keys(state).forEach(element => {
          delete state[element];
        });
    }
  }
}

module.exports = transformState;
