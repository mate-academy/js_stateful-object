'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    const action2 = actions[action];

    switch (action2.type) {
      case 'addProperties':
        Object.assign(state, action2.extraData);
        break;

      case 'removeProperties':
        for (const key in action2.keysToRemove) {
          delete state[action2.keysToRemove[key]];
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
