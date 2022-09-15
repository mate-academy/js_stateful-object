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
        for (const key of element.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const k in state) {
          delete state[k];
        }
        break;

      default:
        throw Error('unknown action type');
    }
  });

  return state;
}

module.exports = transformState;
