'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    switch (i.type) {
      case 'addProperties':
        Object.assign(state, i.extraData);
        break;

      case 'removeProperties':
        for (const j of i.keysToRemove) {
          if (j in state) {
            delete state[j];
          }
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
