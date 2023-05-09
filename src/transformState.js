'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'addProperties':
        for (const data in act.extraData) {
          state[data] = act.extraData[data];
        };
        break;
      case 'removeProperties':
        for (const key of act.keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      default:
        throw new Error('wrong action type');
    }
  }

  return state;
}

module.exports = transformState;
