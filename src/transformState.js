'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let object;

  for (let i = 0; i < actions.length; i++) {
    object = actions[i];

    if (object.type === 'addProperties') {
      const { extraData } = object;

      for (const key in extraData) {
        state.key = extraData[key];
      }
    }

    if (object.type === 'removeProperties') {
      const { keysToRemove } = object;

      for (let y = 0; y < keysToRemove.length; i++) {
        delete state[keysToRemove[y]];
      }
    }

    if (object.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
