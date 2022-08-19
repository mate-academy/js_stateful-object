'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    const removeArr = actions[action].keysToRemove;
    const actionType = actions[action].type;

    if (actionType === 'addProperties') {
      Object.assign(state, actions[action].extraData);
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
