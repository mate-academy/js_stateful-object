'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const obj in actions) {
    const action = Object.assign({}, actions[obj]);

    if (action['type'] === 'addProperties') {
      const data = action['extraData'];

      for (const key in data) {
        state[key] = data[key];
      }
    }

    if (action['type'] === 'removeProperties') {
      const data = action['keysToRemove'];

      for (const key in data) {
        delete state[data[key]];
      }
    }

    if (action['type'] === 'clear') {
      const allProperties = Object.getOwnPropertyNames(state);

      allProperties.forEach(prop => {
        delete state[prop];
      });
    }
  }
}

module.exports = transformState;
