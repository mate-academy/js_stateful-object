'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const actionData = actions[i];

    if (actionData.type === 'addProperties') {
      for (const key in actionData.extraData) {
        state[key] = actionData.extraData[key];
      }
    }

    if (actionData.type === 'removeProperties') {
      for (const key of actionData.keysToRemove) {
        delete state[key];
      }
    }

    if (actionData.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
