'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    switch (action.type) {
      case 'addProperties': {
        const extraData = action.extraData;

        for (const key in extraData) {
          state[key] = extraData[key];
        }
        break;
      }

      case 'removeProperties': {
        const keysToRemove = action.keysToRemove;

        for (let j = 0; j < keysToRemove.length; j++) {
          const key = keysToRemove[j];

          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      }

      case 'clear': {
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      }
      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
