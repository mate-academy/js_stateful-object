'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(e => {
    switch (e.type) {
      case 'addProperties':
        Object.assign(state, e.extraData);
        break;
      case 'removeProperties':
        e.keysToRemove.forEach(el => delete state[el]);
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;

      default: {
        throw new Error(`Unsupported action type: ${actions.type}`);
      }
    }
  });
}

module.exports = transformState;
