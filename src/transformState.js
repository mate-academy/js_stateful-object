'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i]['type'] === 'addProperties') {
      Object.assign(state, actions[i]['extraData']);
    }

    if (actions[i]['type'] === 'removeProperties') {
      for (const property in actions[i]['keysToRemove']) {
        delete state[actions[i]['keysToRemove'][property]];
      }
    }

    if (actions[i]['type'] === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }

  return state;
}

module.exports = transformState;
