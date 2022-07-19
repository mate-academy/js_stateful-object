'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const typeKey = actions[i].type;
    const extraDataKey = actions[i].extraData;
    const removeKeys = actions[i].keysToRemove;

    switch (typeKey) {
      case 'addProperties':
        Object.assign(state, extraDataKey);
        break;

      case 'removeProperties':
        for (let x = 0; x < removeKeys.length; x++) {
          delete state[removeKeys[x]];
        };
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      default:
        break;
    }
  }

  return state;
}

module.exports = transformState;
