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

  for (const action of actions) {
    switch (action[type]) {
      case 'addProperties':
        const objectExtraData = action[extraData];

        for (const key in objectExtraData) {
          state[key] = objectExtraData[key];
        }
        break;
      case 'removeProperties':
        for (const key of action[keysToRemove]) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
