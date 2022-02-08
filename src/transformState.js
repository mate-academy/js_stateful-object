'use strict';

/**
 * @param {Object} state
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
          delete state[key];
        });
        break;

      case CLEAR:
        for (const key in state) {
          delete state[key];
        }
    }
  });
}

module.exports = transformState;
