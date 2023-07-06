'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const level of actions) {
    switch (level.type) {
      case 'addProperties':
        Object.assign(state, level.extraData);
        break;
      case 'removeProperties':
        for (const key of level.keysToRemove) {
          delete state[key];
        }

        break;
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
    }
  }
}
module.exports = transformState;
