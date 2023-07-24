'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;
    const add = 'addProperties';
    const DataToAdd = 'extraData';
    const remove = 'removeProperties';
    const DataToRemove = 'keysToRemove';
    const clear = 'clear';

    switch (type) {
      case add:
        if (DataToAdd in action) {
          const { extraData } = action;

          Object.assign(state, extraData);
        };
        break;

      case remove:
        if (DataToRemove in action) {
          const { keysToRemove } = action;

          for (const key of keysToRemove) {
            if (state.hasOwnProperty(key)) {
              delete state[key];
            }
          }
        }
        break;

      case clear:
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
