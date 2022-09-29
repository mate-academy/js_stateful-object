'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const middleActions of actions) {
    switch (middleActions.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, middleActions.extraData);
        break;

      case 'removeProperties':
        for (const elem of middleActions.keysToRemove) {
          delete state[elem];
        }
        break;
    }
  }
}

module.exports = transformState;
