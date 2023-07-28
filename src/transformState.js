'use strict';

/**
 * @param {Object} state
 * @typeof {Object} Action
 * @property {string} type
 * @property {Object} extraData
 * @property {string[]} keysToRemove
 * @param {Object[]} actions
 */

const ADD_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR = 'clear';

function transformState(state, actions) {
  actions.forEach((action) => {
    switch (action.type) {
      case ADD_PROPERTIES:
        Object.assign(state, action.extraData);
        break;
      case REMOVE_PROPERTIES:
        action.keysToRemove.forEach((key) => {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        });
        break;
      case CLEAR:
        Object.keys(state).forEach((key) => {
          delete state[key];
        });
        break;
      default:
        throw Error(`invalid input`);
    }
  });

  return state;
}

module.exports = transformState;
