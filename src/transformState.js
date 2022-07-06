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
        e.keysToRemove.forEach(key => {
          delete state[key];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('No action of such type yet');
    }
  });

  return state;
}

module.exports = transformState;
