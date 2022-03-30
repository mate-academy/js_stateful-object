'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        const { extraData } = action;

        Object.assign(state, extraData);

        break;
      }

      case 'removeProperties': {
        const { keysToRemove } = action;

        for (const key in state) {
          if (keysToRemove.includes(key)) {
            delete state[key];
          }
        }

        break;
      }

      case 'clear': {
        for (const key in state) {
          delete state[key];
        }

        break;
      }
    }
  }
}

module.exports = transformState;
