'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(act => {
    switch (act.type) {
      case 'addProperties':
        for (const key in act.extraData) {
          state[key] = act.extraData[key];
        }
        break;

      case 'removeProperties':
        for (const key in act.keysToRemove) {
          delete state[act.keysToRemove[key]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;
    }
  });

  return state;
}

module.exports = transformState;
