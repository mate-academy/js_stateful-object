'use strict';

function transformState(state, actions) {
  for (const value of actions) {
    if (value['type'] === 'addProperties') {
      Object.assign(state, value['extraData']);
    }

    if (value['type'] === 'removeProperties') {
      for (const item of value['keysToRemove']) {
        delete state[item];
      }
    }

    if (value['type'] === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
