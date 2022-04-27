'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const type = action.type;
    const extraData = action.extraData;
    const keysToRemove = action.keysToRemove;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;

      default:
        throw new Error();
    }
  }

  return state;
}

module.exports = transformState;
