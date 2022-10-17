'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    } else if (actions[i].type === 'removeProperties') {
      for (let j = 0; j < actions[i].keysToRemove.length; j++) {
        for (let k = 0; k < Object.keys(state).length; k++) {
          if (actions[i].keysToRemove[j] === Object.keys(state)[k]) {
            delete state[Object.keys(state)[k]];
          }
        }
      }
    } else {
      for (const prop in state) {
        if (state.hasOwnProperty(prop)) {
          delete state[prop];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
