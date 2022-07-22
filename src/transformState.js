'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    const object = actions[action];

    for (const key in object) {
      switch (object[key]) {
        case 'addProperties':
          Object.assign(state, object['extraData']);
          break;
        case 'removeProperties':
          const deleteValue = object['keysToRemove'];

          for (const i of deleteValue) {
            delete state[i];
          }
          break;
        case 'clear':
          for (const value in state) {
            delete state[value];
          }
          break;
      }
    }
  }
}

module.exports = transformState;
