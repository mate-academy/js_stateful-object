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
    switch (keys.type) {
      case 'addProperties':
        Object.assign(state, keys.extraData);
        break;

      case 'removeProperties':
        for (const key of keys.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        state = {};
        break;
    }
  }
}

module.exports = transformState;
