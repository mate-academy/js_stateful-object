'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionKey of actions) {
    if (actionKey.type === 'addProperties') {
      Object.assign(state, actionKey.extraData);
    } else if (actionKey.type === 'removeProperties') {
      for (const removeKey of actionKey.keysToRemove) {
        delete state[removeKey];
      };
    } else if (actionKey.type === 'clear') {
      for (const keyClear in state) {
        delete state[keyClear];
      };
    };
  };

  return state;
};

module.exports = transformState;
