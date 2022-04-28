'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        for (const act of action.keysToRemove) {
          delete state[act];
        };
        break;
      case 'clear':
        for (const del in state) {
          delete state[del];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
