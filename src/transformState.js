'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        const { keysToRemove } = action;

        for (const toRemoveProperty of keysToRemove) {
          delete state[toRemoveProperty];
        };
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  };
}

module.exports = transformState;
