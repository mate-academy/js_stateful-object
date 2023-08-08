'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const add = 'addProperties';
  const remove = 'removeProperties';
  const clear = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case add:
        Object.assign(state, action.extraData);
        break;

      case remove:
        for (const removeKey of action.keysToRemove) {
          if (removeKey in state) {
            delete state[removeKey];
          };
        };
        break;

      case clear:
        for (const clearKey in state) {
          delete state[clearKey];
        };
        break;
    };
  };

  return state;
}

module.exports = transformState;
