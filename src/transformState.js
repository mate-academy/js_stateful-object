'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties': {
        Object.assign(state, extraData);
        break;
      }

      case 'removeProperties': {
        for (let i = 0; i < keysToRemove.length; i++) {
          delete state[keysToRemove[i]];
        }
        break;
      }

      case 'clear' : {
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
      }

      default : {
        throw new Error('ERROR');
      }
    }
  }
}

module.exports = transformState;
