'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const ADD_PROPERTIES = 'addProperties';
const REMOVE_PROPERTIES = 'removeProperties';
const CLEAR_ALL = 'clear';

function transformState(state, actions) {
  const stateHistory = [];

  for (const order of actions) {
    switch (order.type) {
      case ADD_PROPERTIES:
        Object.assign(state, order.extraData);
        stateHistory.push(Object.assign({}, state));
        break;

      case REMOVE_PROPERTIES:
        for (const remove of order.keysToRemove) {
          delete state[remove];
        }

        stateHistory.push(Object.assign({}, state));
        break;

      case CLEAR_ALL:
        for (const key in state) {
          delete state[key];
        }

        stateHistory.push(Object.assign({}, state));
        break;
    }
  }

  return state;
}

module.exports = transformState;
