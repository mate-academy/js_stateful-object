'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionKey of actions) {
    switch (actionKey.type) {
      case 'addProperties':
        Object.assign(state, actionKey.extraData);
        break;

      case 'removeProperties':
        for (const removeKey of actionKey.keysToRemove) {
          delete state[removeKey];
        };
        break;

      case 'clear':
        for (const keyClear in state) {
          delete state[keyClear];
        };
        break;
    };
  };

  return state;
};

module.exports = transformState;
