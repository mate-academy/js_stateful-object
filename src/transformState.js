'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const property of action.keysToRemove) {
          delete state[property];
        }
        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
    }
  }
}

module.exports = transformState;
