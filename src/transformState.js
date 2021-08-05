'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obgInAction of actions) {
    if (obgInAction.type === 'addProperties') {
      Object.assign(state, obgInAction.extraData);
    }

    if (obgInAction.type === 'removeProperties') {
      for (const keyForDelete of obgInAction.keysToRemove) {
        delete state[keyForDelete];
      }
    }

    if (obgInAction.type === 'clear') {
      for (const keyOfState in state) {
        delete state[keyOfState];
      }
    }
  }

  return state;
}

module.exports = transformState;
