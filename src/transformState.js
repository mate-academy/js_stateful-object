'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (true) {
      case type === 'clear': {
        for (const s in state) {
          delete state[s];
        }
        break;
      }

      case type === 'addProperties': {
        Object.assign(state, extraData);
        break;
      }

      case type === 'removeProperties': {
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
      }

      default:
        return 'Unexpected acrion';
    };
  };

  return state;
}

module.exports = transformState;
