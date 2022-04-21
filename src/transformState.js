'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const stateObject = state;

  for (const key of actions) {
    if (key.type === 'addProperties') {
      Object.assign(stateObject, key.extraData);
    }

    if (key.type === 'removeProperties') {
      for (const removeItem of key.keysToRemove) {
        delete stateObject[removeItem];
      }
    }

    if (key.type === 'clear') {
      for (const remove in stateObject) {
        delete stateObject[remove];
      }
    }
  }

  return stateObject;
}

module.exports = transformState;
