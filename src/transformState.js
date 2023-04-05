'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case action.type === 'removeProperties':
        for (const del of action.keysToRemove) {
          delete state[del];
        }
        break;

      case action.type === 'clear':
        for (const all in state) {
          delete state[all];
        }
        break;
    }
  }
}

module.exports = transformState;
