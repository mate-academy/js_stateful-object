'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const addProp = 'addProperties';
  const removeProp = 'removeProperties';
  const clear = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case addProp:
        for (const [key, value] of Object.entries(action.extraData)) {
          state[key] = value;
        }
        break;

      case removeProp:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case clear:
        for (const key of Object.keys(state)) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
