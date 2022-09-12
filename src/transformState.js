'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let now;

  for (let i = 0; i < actions.length; i++) {
    now = Object.values(actions[i]);

    if (now[0] === 'addProperties') {
      Object.assign(state, now[1]);
    }

    if (now[0] === 'removeProperties') {
      for (let k = 0; k < now[1].length; k++) {
        delete state[now[1][k]];
      }
    }

    if (now[0] === 'clear') {
      for (const key in state) {
        if (state.hasOwnProperty(key)) {
          delete state[key];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
