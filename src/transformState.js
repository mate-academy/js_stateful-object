'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const { type, keysToRemove, extraData } = action; // деструктурую.

    switch (type) { // switch для збігів по типу
      case 'addProperties':
        addProp(state, extraData);
        break;

      case 'removeProperties':
        removeProp(state, keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;

      default:
        return 'error';
    }
  }
};

const addProp = (state, extraData) => {
  Object.assign(state, extraData);
};

const removeProp = (state, keysToRemove) => {
  for (const key of keysToRemove) {
    delete state[key];
  }
};

const clear = (state) => {
  for (const key in state) {
    delete state[key];
  };
};

module.exports = transformState;
