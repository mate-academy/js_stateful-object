'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const oneAction of actions) {
    if (oneAction.type === 'addProperties') {
      Object.assign(state, oneAction.extraData);
    } else if (oneAction.type === 'removeProperties') {
      for (const oneArray of oneAction.keysToRemove) {
        delete state[oneArray];
      }
    } else if (oneAction.type === 'clear') {
      for (const oneState in state) {
        delete state[oneState];
      }
    }
  }
}

module.exports = transformState;
