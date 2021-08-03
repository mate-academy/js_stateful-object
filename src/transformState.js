'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const clearAction = 'clear';
  const addPropertiesAction = 'addProperties';
  const removePropertiesAction = 'removeProperties';

  for (const action of actions) {
    switch (action.type) {
      case clearAction:
        for (const key in state) {
          delete state[key];
        }
        break;
      case addPropertiesAction:
        Object.assign(state, action.extraData);
        break;
      case removePropertiesAction:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
