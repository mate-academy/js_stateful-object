'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function stateClear(state) {
  for (const prop in state) {
    delete state[prop];
  }
}

function stateRemoveProperty(state, keysArr) {
  for (const key of keysArr) {
    delete state[key];
  }
}

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        stateRemoveProperty(state, action.keysToRemove);
        break;

      case 'clear':
        stateClear(state);
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
