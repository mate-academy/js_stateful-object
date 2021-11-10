'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  actions.forEach(action => {
    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      action.keysToRemove.forEach(item => delete state[item]);
    }

    if (action.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  });

  return state;
}

module.exports = transformState;
