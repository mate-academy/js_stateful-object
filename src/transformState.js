'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const type = action.type;
    const extraData = action.extraData;
    const keysToRemove = action.keysToRemove;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const arrKey of keysToRemove) {
          if (state.hasOwnProperty(arrKey)) {
            delete state[arrKey];
          }
        }
        break;

      case 'clear':
        for (const objKey in state) {
          delete state[objKey];
        }
        break;

      default:
        return 'Invalid action type';
    }
  }
}

module.exports = transformState;
