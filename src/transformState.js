'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties' :
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties' :
        for (const variable in key.keysToRemove) {
          if (key.keysToRemove[variable] in state) {
            delete state[key.keysToRemove[variable]];
          }
        }
        break;

      case 'clear' :
        for (const number in state) {
          delete state[number];
        }
    }
  }
}

module.exports = transformState;
