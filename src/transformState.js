'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    const { keysToRemove, extraData, type } = action;

    switch (type) {
      case 'addProperties' :
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        for (const i of keysToRemove) {
          delete state[i];
        }
        break;

      case 'clear':
        for (const element in state) {
          delete state[element];
        }
    }
  });

  return state;
}

module.exports = transformState;
