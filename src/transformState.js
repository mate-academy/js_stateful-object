'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties' :
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        for (const i of action.keysToRemove) {
          if (state[i]) {
            delete state[i];
          }
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
