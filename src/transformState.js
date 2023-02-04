'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let addedState = {};

  for (const action of actions) {
    switch (true) {
      // eslint-disable-next-line no-lone-blocks
      case action.type === 'addProperties': {
        addedState = action.extraData;
        Object.assign(state, addedState);
        break;
      };

      case action.type === 'removeProperties': {
        for (const key in state) {
          for (const keyRemove of action.keysToRemove) {
            if (key === keyRemove) {
              delete state[key];
            }
          }
        };
        break;
      }

      case (action.type === 'clear'): {
        for (const clearKey in state) {
          delete state[clearKey];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
