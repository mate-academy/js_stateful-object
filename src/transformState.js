'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const oneAction of actions) {
    switch (oneAction.type) {
      case 'addProperties':
        Object.assign(state, oneAction.extraData);
        break;
      case 'removeProperties':
        for (const oneArray of oneAction.keysToRemove) {
          delete state[oneArray];
        }
        break;
      case 'clear':
        for (const oneState in state) {
          delete state[oneState];
        }
        break;
    }
  }
}

module.exports = transformState;
