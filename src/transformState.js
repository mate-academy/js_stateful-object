'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action['type'] === 'addProperties') {
      const additionalObj = action['extraData'];

      for (const objKey in additionalObj) {
        state[objKey] = additionalObj[objKey];
      }
    }

    if (action['type'] === 'removeProperties') {
      const arr = action['keysToRemove'];

      for (const arrElem of arr) {
        delete state[arrElem];
      }
    }

    if (action['type'] === 'clear') {
      for (const stateKey in state) {
        delete state[stateKey];
      }
    }
  }
}

module.exports = transformState;
