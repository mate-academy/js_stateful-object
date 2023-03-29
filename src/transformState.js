'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const actionType = actions[i];
    const type = actionType.type;

    if (type === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    }

    if (type === 'addProperties') {
      const extraData = actionType.extraData;

      for (const [key, value] of Object.entries(extraData)) {
        state[key] = value;
      }
    }

    if (type === 'removeProperties') {
      const keysToRemove = actionType.keysToRemove;

      for (const key of keysToRemove) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
