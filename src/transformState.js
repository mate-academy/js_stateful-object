'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const type = action.type;

    switch (type) {
      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }
        break;

      case 'addProperties':
        for (const additionalProps in action) {
          if (additionalProps === 'extraData') {
            Object.assign(state, action[additionalProps]);
          }
        }
        break;

      case 'removeProperties':
        for (const input of action.keysToRemove) {
          delete state[input];
        }
        break;

      default:
        return state;
    }
  }

  return state;
}

module.exports = transformState;
