'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const item of actions) {
    switch (true) {
      case item.type === 'addProperties':
        const { extraData } = item;

        Object.assign(state, extraData);
        break;

      case item.type === 'removeProperties':
        for (const key of item.keysToRemove) {
          delete state[key];
        }
        break;

      case item.type === 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
