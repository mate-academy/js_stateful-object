'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const type = action.type;

    switch (type) {
      case 'addProperties':
        const extraData = action.extraData;

        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        const keysToRemove = action.keysToRemove;

        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error(`${type} doesn't exist`);
    }
  }
}

module.exports = transformState;
