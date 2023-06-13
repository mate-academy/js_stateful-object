'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const addOption = 'addProperties';
  const removeOption = 'removeProperties';
  const clearOption = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case addOption:
        Object.assign(state, action.extraData);
        break;
      case removeOption:
        for (const key of action.keysToRemove) {
          delete state[key];
        }

        break;
      case clearOption:
        for (const key of Object.keys(state)) {
          delete state[key];
        }

        break;
      default:
        return 'There is no options to change';
    }
  }
}

module.exports = transformState;
