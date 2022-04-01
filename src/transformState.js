'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(e => {
    if (e.type === 'addProperties') {
      Object.assign(state, e.extraData);
    } else if (e.type === 'removeProperties') {
      e.keysToRemove.forEach(el => delete state[el]);
    } else if (e.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  });
}

module.exports = transformState;
