'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  if (actions.type === 'addProperties') {
    Object.assign(state, actions.extraData);
  }

  if (actions.type === 'removeProperties') {
    for (const key in actions.extraData) {
      if (state.hasOwnProperty(key)) {
        delete state[key];
      }
    }
  }

  if (actions.type === 'clear') {
    Object.keys(state).forEach(key => {
      delete state[key];
    });
  }
}

module.exports = transformState;
