'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const j in actions) {
    switch (true) {
      case (actions[j].type === 'addProperties'):
        Object.assign(state, actions[j].extraData);
        break;
      case (actions[j].type === 'clear'):
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      case (actions[j].type === 'removeProperties'):
        for (const key in state) {
          for (let p = 0; p < actions[j].keysToRemove.length; p++) {
            if (actions[j].keysToRemove[p] === key) {
              delete state[key];
            }
          }
        }
        break;
    }
  }
}

module.exports = transformState;
