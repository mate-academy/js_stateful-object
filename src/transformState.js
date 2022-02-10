'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const change of actions) {
    switch (change.type) {
      case 'addProperties':
        Object.assign(state, change.extraData);
        break;

      case 'clear':
        for (const action in state) {
          delete state[action];
        }
        break;

      case 'removeProperties':

        for (const action of change.keysToRemove) {
          delete state[action];
        }
        break;
    }
  }
}
module.exports = transformState;
