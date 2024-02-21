'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        if (action.extraData) {
          Object.assign(state, action.extraData);
        }
        break;
      case 'removeProperties':
        if (action.keysToRemove) {
          action.keysToRemove.forEach(key => {
            if (state.hasOwnProperty(key)) {
              delete state[key];
            }
          });
        }
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  });
}

module.exports = transformState;
