'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (object.type) {
      case 'addProperties':
        addPropertiesFunc(state, object.extraData);
        break;

      case 'removeProperties':
        removePropertiesFunc(state, object.keysToRemove);
        break;

      case 'clear':
        clearFunc(state);
        break;
    }
  }
}

const addPropertiesFunc = (state, data) => {
  return Object.assign(state, data);
};

const removePropertiesFunc = (state, toRemove) => {
  for (const value of toRemove) {
    delete state[value];
  }
};

const clearFunc = state => {
  for (const key in state) {
    delete state[key];
  }
};

module.exports = transformState;
