'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    const removeArr = actions[action].keysToRemove;
    const actionType = actions[action].type;
    const extraData = actions[action].extraData;

    if (actionType === 'addProperties') {
      Object.assign(state, extraData);
    } else if (actionType === 'removeProperties') {
      for (const removeProp of removeArr) {
        delete state[removeProp];
      }
    } else if (actionType === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
