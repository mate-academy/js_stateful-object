'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const operation = action.type;

    switch (operation) {
      case 'addProperties':
        const property = action.extraData;

        Object.assign(state, property);
        break;

      case 'removeProperties':
        const removeKeys = action.keysToRemove;

        for (const key of removeKeys) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const value in state) {
          delete state[value];
        }
        break;

      default:
        const ERROR = new Error('Wrong "state" or "actions" value!');

        return ERROR;
    }
  }
}

module.exports = transformState;
