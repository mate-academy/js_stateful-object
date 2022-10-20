'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    const { extraData, keysToRemove: rem } = obj;

    if (obj.type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (obj.type === 'removeProperties') {
      for (const item of rem) {
        delete state[item];
      }
    }

    if (obj.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
