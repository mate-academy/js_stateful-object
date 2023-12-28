'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'clear': {
        for (const s in state) {
          delete state[s];
        }
        break;
      }

      case 'addProperties': {
        Object.assign(state, extraData);
        break;
      }

      case 'removeProperties': {
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
      }

      default:
        return 'Unexpected action';
    };
  };

  return state;
}

module.exports = transformState;
