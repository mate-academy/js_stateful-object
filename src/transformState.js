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
        removeProperties(state, action);
        break;

      case 'clear':
        clearProperties(state);
        break;

      default:
        return 'Something go wrong!';
    }
  }
}

/**
 * @param {Object} state
 * @param {Object} action
 */
function removeProperties(state, action) {
  for (const key of action.keysToRemove) {
    if (!state.hasOwnProperty(key)) {
      continue;
    }

    delete state[key];
  }
}

/**
 * @param {Object} state
 */
function clearProperties(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
