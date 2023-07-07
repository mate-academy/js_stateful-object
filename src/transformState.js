'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const object = actions[i];

    if (object.type === 'addProperties') {
      for (const key in object.extraData) {
        state[key] = object.extraData[key];
      }
    }

    if (object.type === 'removeProperties') {
      for (const word of object.keysToRemove) {
        delete state[word];
      }
    }

    if (object.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
