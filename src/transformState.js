'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const aType = actions[i].type;
    const aExtra = actions[i].extraData;
    const aKeysToRemove = actions[i].keysToRemove;

    switch (aType) {
      case 'addProperties':
        Object.assign(state, aExtra);
        break;

      case 'removeProperties':
        for (let x = 0; x < aKeysToRemove.length; x++) {
          delete state[aKeysToRemove[x]];
        };
        break;

      default:
        for (const key in state) {
          delete state[key];
        };
        break;
    }
  }

  return state;
}

module.exports = transformState;
