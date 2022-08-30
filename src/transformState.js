'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let correctState = state;

  for (const action of actions) {
    if (action['type'] === 'addProperties') {
      correctState = Object.assign(correctState, action['extraData']);
    }

    if (action['type'] === 'removeProperties') {
      for (const keys of action['keysToRemove']) {
        delete correctState[keys];
      }
    }

    if (action['type'] === 'clear') {
      for (const keys in correctState) {
        delete correctState[keys];
      }
    }
  }

  return correctState;
}

module.exports = transformState;
