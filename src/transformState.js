'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let keys = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        keys = action.keysToRemove;

        for (const key of keys) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const elementState in state) {
          delete state[elementState];
        }
        break;

      default:
        throw new Error(`Unsupported action type:#{Saction.tipe}`);
    }
  }

  return state;
}

module.exports = transformState;
