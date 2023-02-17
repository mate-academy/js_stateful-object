'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case ('addProperties') :
        Object.keys(action.extraData).forEach(function() {
          Object.assign(state, action.extraData);
        });
        break;

      case ('removeProperties') :
        Object.keys(action.keysToRemove).forEach(function(key) {
          delete state[action.keysToRemove[key]];
        });
        break;

      case ('clear') :
        for (const key in state) {
          delete state[key];
        }
    }
  });

  return state;
}

module.exports = transformState;
