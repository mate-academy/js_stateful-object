'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const [removeArr, actionType, extraData] = [
      action.keysToRemove, action.type, action.extraData];

    switch (actionType) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'removeProperties':
        for (const removeProp of removeArr) {
          delete state[removeProp];
        };
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
