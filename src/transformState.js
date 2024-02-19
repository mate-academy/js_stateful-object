'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'clear': for (const key in state) {
        delete state[key];
      };
        break;

      case 'addProperties': Object.assign(state, action.extraData);
        break;

      case 'removeProperties': action.keysToRemove.forEach(key => {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      });
        break;

      default: return 'Fix mistake';
    }
  });

  return state;
}

module.exports = transformState;
