'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const data of actions) {
    if (data.type === 'clear') {
      for (const clear in state) {
        delete state[clear];
      }
    }

    if (data.type === 'removeProperties') {
      for (const remove of data.keysToRemove) {
        delete state[remove];
      }
    }

    if (data.type === 'addProperties') {
      Object.assign(state, data.extraData);
    }
  }

  return state;
}

module.exports = transformState;
