'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      // eslint-disable-next-line
      case 'addProperties': {
        Object.assign(state, action.extraData);
      } break;
      // eslint-disable-next-line
      case 'removeProperties': {
        for (const key of action.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
      } break;
      // eslint-disable-next-line
      case 'clear': {
        for (const stateKey in state) {
          delete state[stateKey];
        }
      } break;
      default:
        break;
    }
  }
}

module.exports = transformState;
