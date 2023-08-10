'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const actionType = action.type;
    const actionExtraDate = action.extraData;

    switch (actionType) {
      case 'addProperties': {
        Object.assign(state, actionExtraDate);
        break;
      }

      case 'removeProperties': {
        for (let index = 0; index < action.keysToRemove.length; index++) {
          delete state[action.keysToRemove[index]];
        }
        break;
      }

      case 'clear': {
        for (const key in state) {
          delete state[key];
        }
        break;
      }

      default: {
        throw new Error(`Unsopported action type: ${actionType}`);
      }
    }
  }

  return state;
}

module.exports = transformState;
