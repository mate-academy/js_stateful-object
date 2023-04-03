'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(element => {
    switch (element.type) {
      case 'addProperties':
        Object.assign(state, element.extraData);
        break;

      case 'removeProperties':
        element.keysToRemove.forEach(key => {
          delete state[key];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      default:
        throw new Error('data dont regard conditions');
    }
  });
}

module.exports = transformState;
