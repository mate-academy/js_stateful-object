'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i]['type'] === 'addProperties') {
      Object.assign(state, actions[i]['extraData']);
    } else if (actions[i]['type'] === 'removeProperties') {
      const remove = Object.keys(state);

      for (let g = 0; g < remove.length; g++) {
        for (let k = 0; k < remove.length; k++) {
          if (remove[g] === actions[i].keysToRemove[k]) {
            delete state[remove[g]];
          }
        }
      }
    } else if (actions[i]['type'] === 'clear') {
      for (const key of Object.keys(state)) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
