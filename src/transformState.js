'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    const dataPlus = actions[key];

    if (actions[key].type === 'addProperties') {
      for (const keykey in dataPlus) {
        const final = dataPlus[keykey];

        for (const values in final) {
          state[values] = final[values];
        }
      }
    } else if (actions[key].type === 'removeProperties') {
      if (state.length === actions[key].keysToRemove.length) {
        for (const keys in state) {
          delete state[keys];
        }
      }

      for (const keys in state) {
        if (keys === actions[key].keysToRemove[0]
          || keys === actions[key].keysToRemove[1]
          || keys === actions[key].keysToRemove[2]
          || keys === actions[key].keysToRemove[3]
          || keys === actions[key].keysToRemove[4]
          || keys === actions[key].keysToRemove[5]) {
          delete state[keys];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
