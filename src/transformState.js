'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    const operation = obj.type;

    switch (operation) {
      case 'addProperties':
        const property = obj.extraData;

        Object.assign(state, property);
        break;

      case 'removeProperties':
        const removeKeys = obj.keysToRemove;

        for (const key of removeKeys) {
          delete state[key];
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
  }
}

module.exports = transformState;
