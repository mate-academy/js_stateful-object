'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const copiedState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(copiedState, action.extraData);
        break;

      case 'removeProperties':
        const arr = action.keysToRemove;

        for (let k = 0; k < arr.length; k++) {
          delete copiedState[arr[k]];
        };
        break;

      case 'clear':
        for (const key in copiedState) {
          if (copiedState.hasOwnProperty(key)) {
            delete copiedState[key];
          }
        }
        break;
    }
  }
}

module.exports = transformState;
