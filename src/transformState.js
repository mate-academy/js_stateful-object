'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        const additionalObj = action['extraData'];

        for (const objKey in additionalObj) {
          state[objKey] = additionalObj[objKey];
        }

        break;

      case 'removeProperties':
        const arr = action['keysToRemove'];

        for (const arrElem of arr) {
          delete state[arrElem];
        }
        break;

      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;
    }
  }
}

module.exports = transformState;
