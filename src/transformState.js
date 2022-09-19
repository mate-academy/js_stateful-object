'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    const obj = actions[key];

    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (obj.type === 'removeProperties') {
      for (const word of obj.keysToRemove) {
        delete state[word];
      }
    }

    if (obj.type === 'clear') {
      const stateKeys = Object.keys(state);

      for (const word of stateKeys) {
        delete state[word];
      }
    }
  }
}
module.exports = transformState;
