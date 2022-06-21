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
      for (let x = 0; x < actions[i]['keysToRemove'].length; x++) {
        delete state[actions[i]['keysToRemove'][x]];
      }
    }

    if (actions[i]['type'] === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
