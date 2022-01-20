'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const type = 'type';
  const extraData = 'extraData';
  const keysToRemove = 'keysToRemove';

  for (const object of actions) {
    if (object[type] === 'addProperties') {
      const objectExtraData = object[extraData];

      for (const key in objectExtraData) {
        state[key] = objectExtraData[key];
      }
    }

    if (object[type] === 'removeProperties') {
      for (const key of object[keysToRemove]) {
        delete state[key];
      }
    }

    if (object[type] === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
