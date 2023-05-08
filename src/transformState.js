'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const initialState = state;

  actions.forEach(object => {
    if (object.type === 'addProperties') {
      for (const key in object.extraData) {
        initialState[key] = object.extraData[key];
      }
    } else if (object.type === 'removeProperties') {
      for (const key of object.keysToRemove) {
        delete initialState[key];
      }
    } else {
      for (const key in initialState) {
        delete initialState[key];
      }
    }
  });

  return initialState;
}

module.exports = transformState;
