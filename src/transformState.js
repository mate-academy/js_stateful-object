'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const addProperties = 'addProperties';
  const removeProperties = 'removeProperties';
  const clear = 'clear';

  for (const action of actions) {
    switch (true) {
      case (action.type === addProperties):
        Object.assign(state, action.extraData);
        break;

      case (action.type === removeProperties):
        for (const key of action.keysToRemove) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }

        break;

      case (action.type === clear):
        for (const key in state) {
          delete state[key];
        }

        break;
    }
  }

  return state;
}

module.exports = transformState;
