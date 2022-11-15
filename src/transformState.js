'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { keysToRemove, extraData, type } = action;

    switch (true) {
      case type === 'addProperties':
        Object.assign(state, extraData);
        break;

      case type === 'removeProperties':
        for (const i of keysToRemove) {
          delete state[i];
        };
        break;

      case type === 'clear':
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
    }
  }
}

module.exports = transformState;
