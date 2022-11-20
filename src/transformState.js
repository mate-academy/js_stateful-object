'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((el) => {
    switch (el.type) {
      case 'addProperties':
        Object.assign(state, el.extraData);
        break;
      case 'removeProperties':
        for (const key of el.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      default:
        break;
    }
  });
}

module.exports = transformState;
