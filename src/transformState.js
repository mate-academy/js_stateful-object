'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const changedState = state;

  for (const action of Object.values(actions)) {
    switch (action.type) {
      case 'addProperties':
        for (const [addKey, addValue] of Object.entries(action.extraData)) {
          changedState[addKey] = addValue;
        }
        break;

      case 'removeProperties':
        for (const removeKey of Object.values(action.keysToRemove)) {
          delete changedState[removeKey];
        }
        break;

      case 'clear':
        for (const clearKeys of Object.keys(changedState)) {
          delete changedState[clearKeys];
        }
        break;

      default:
        throw new Error(`Action ${action.type} isn't alloud`);
    }
  }
}

module.exports = transformState;
