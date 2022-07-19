'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    const object = actions[action];

    for (const key in object) {
      if (object[key] === 'addProperties') {
        Object.assign(state, object['extraData']);
      }

      if (object[key] === 'removeProperties') {
        const deleteValue = object['keysToRemove'];

        for (const i of deleteValue) {
          delete state[i];
        }
      }

      if (object[key] === 'clear') {
        for (const value in state) {
          delete state[value];
        }
      }
    }
  }
}

module.exports = transformState;
