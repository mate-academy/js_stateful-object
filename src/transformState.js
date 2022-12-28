'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const el of actions) {
    switch (el.type) {
      case 'addProperties':
        Object.assign(state, el.extraData);
        break;

      case 'removeProperties':
        for (const keysRemove of el.keysToRemove) {
          delete state[keysRemove];
        };
        break;

      case 'clear':
        for (const key in state) {
          if (state.hasOwnProperty([key])) {
            delete state[key];
          }
        };
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
