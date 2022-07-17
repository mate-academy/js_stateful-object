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

    if (aType === 'addProperties') {
      Object.assign(state, aExtra);
    } else if (aType === 'removeProperties') {
      for (let x = 0; x < aKeysToRemove.length; x++) {
        delete state[aKeysToRemove[x]];
      }
    } else if (aType === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
