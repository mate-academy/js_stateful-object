'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const arr of actions) {
    if (arr['type'] === 'clear') {
      for (const prop in state) {
        delete state[prop];
      };
    };

    if (arr['type'] === 'addProperties') {
      Object.assign(state, arr['extraData']);
    };

    if (arr['type'] === 'removeProperties') {
      for (const prop of arr['keysToRemove']) {
        delete state[prop];
      };
    };
  };
}

module.exports = transformState;
