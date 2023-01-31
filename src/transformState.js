'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let cloneState = state;

  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        cloneState = Object.assign(cloneState, extraData);
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete cloneState[key];
        }
        break;

      case 'clear':
        for (const key in cloneState) {
          delete cloneState[key];
        };
        break;
    }
  }

  return cloneState;
}

module.exports = transformState;
