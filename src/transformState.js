'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const stateHistory = [];

  for (const order of actions) {
    const ADD_PROPERTIES = order.type === 'addProperties';
    const REMOVE_PROPERTIES = order.type === 'removeProperties';
    const CLEAR_ALL = order.type === 'clear';

    if (ADD_PROPERTIES) {
      Object.assign(state, order.extraData);
      stateHistory.push(Object.assign({}, state));
    }

    if (REMOVE_PROPERTIES) {
      for (const remove of order.keysToRemove) {
        delete state[remove];
      }

      stateHistory.push(Object.assign({}, state));
    }

    if (CLEAR_ALL) {
      for (const key in state) {
        delete state[key];
      }

      stateHistory.push(Object.assign({}, state));
    }
  }

  return state;
}

module.exports = transformState;
