'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const addProperties = 'addProperties';
  const removeProperties = 'removeProperties';
  const clear = 'clear';

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === addProperties) {
      Object.assign(state, actions[i].extraData);
    }

    if (actions[i].type === removeProperties) {
      for (const key of actions[i].keysToRemove) {
        delete state[key];
      }
    }

    if (actions[i].type === clear) {
      for (const keyI in state) {
        delete state[keyI];
      }
    }
  }
}

module.exports = transformState;
