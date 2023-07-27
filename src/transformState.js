'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

const ACTION_ADD_PROPERTIES = 'addProperties';
const ACTION_REMOVE_PROPERTIES = 'removeProperties';
const ACTION_CLEAR = 'clear';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ACTION_ADD_PROPERTIES:
        Object.assign(state, action.extraData);
        break;

      case ACTION_REMOVE_PROPERTIES:
        action.keysToRemove.forEach((key) => {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        });
        break;

      case ACTION_CLEAR:
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('unsupported value');
    }
  }

  return state;
}

module.exports = transformState;
