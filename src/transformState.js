'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // let state2 = {};

  Object.assign(state, state);

  for (const action in actions) {
    switch (actions[action].type) {
      case 'addProperties':
        Object.assign(state, actions[action].extraData);
        break;

      case 'removeProperties':
        for (const key in actions[action].keysToRemove) {
          delete state[actions[action].keysToRemove[key]];
        } break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
