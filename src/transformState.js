/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const keys of actions) {
    const { type, extraData, keysToRemove } = keys;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        for (const values of keysToRemove) {
          delete state[values];
        }
        break;
      case 'clear':
        for (const values in state) {
          delete state[values];
        }
        break;
    }
  }
}

module.exports = transformState;
