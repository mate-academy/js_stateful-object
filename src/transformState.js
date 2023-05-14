'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  function clear() {
    for (const key in state) {
      delete state[key];
    }
  }

  function removeSomeKeys(keysArray) {
    for (const value of keysArray) {
      delete state[value];
    }
  }

  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        removeSomeKeys(keysToRemove);
        break;

      case 'clear':
        clear();
        break;
    }
  }

  return state;
}

module.exports = transformState;
