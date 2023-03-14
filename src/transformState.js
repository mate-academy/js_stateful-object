'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let object;

  for (let i = 0; i < actions.length; i++) {
    object = actions[i];

    switch (object.type) {
      case 'addProperties':
        const { extraData } = object;

        for (const key in extraData) {
          state.key = extraData[key];
        }
        break;

      case 'removeProperties':
        const { keysToRemove } = object;

        for (let y = 0; y < keysToRemove.length; i++) {
          delete state[keysToRemove[y]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
