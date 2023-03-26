'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      case 'removeProperties':
        const keys = obj.keysToRemove;

        for (const key of keys) {
          if (state[key]) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          if (state[key]) {
            delete state[key];
          }
        }
    }
  }
}
module.exports = transformState;
