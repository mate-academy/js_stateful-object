'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {

  for (const key of actions) {

    switch (key.type) {
      
      case 'clear': {
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;
      }

      case 'addProperties': {
        Object.assign(state, key.extraData);
        break;
      }

      case 'removeProperties': {
        key.keysToRemove.forEach(element => {
          delete state[element];
        });
        break;
      }
    }
  }

  return state;
}

module.exports = transformState;
