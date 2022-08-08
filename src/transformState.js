'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i][`type`]) {
      case 'addProperties':
        for (const property in actions[i][`extraData`]) {
          state[property] = actions[i][`extraData`][property];
        }
        break;

      case 'removeProperties':
        for (const property in actions[i][`keysToRemove`]) {
          if (Object.keys(state).includes(actions[i][`keysToRemove`][property])) {
            delete state[actions[i][`keysToRemove`][property]];
          }
        }
        break;

      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
