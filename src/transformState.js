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
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case add:
        if (extraData) {
          Object.assign(state, extraData);
        }
        break;

      case remove:
        if (keysToRemove) {
          for (const key of keysToRemove) {
            if (key in state) {
              delete state[key];
            }
          }
        }
        break;

      case clear:
        for (const key in state) {
          if (key in state) {
            delete state[key];
          }
        }
        break;
    }
  }
}

module.exports = transformState;
