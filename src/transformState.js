'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const actionType = action.type;
    const actionExtraData = action.extraData;
    const actionKeysToRemove = action.keysToRemove;

    if (actionType === 'addProperties') {
      Object.assign(state, actionExtraData);
    }

    if (actionType === 'removeProperties') {
      for (const property of actionKeysToRemove) {
        delete state[property];
      }
    }

    if (actionType === 'clear') {
      for (const element in state) {
        delete state[element];
      }
    }
  }

  return state;
}

module.exports = transformState;
