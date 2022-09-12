'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let nowAction;

  for (let i = 0; i < actions.length; i++) {
    nowAction = Object.values(actions[i]);

    if (nowAction[0] === 'addProperties') {
      Object.assign(state, nowAction[1]);
    }

    if (nowAction[0] === 'removeProperties') {
      for (let k = 0; k < nowAction[1].length; k++) {
        delete state[nowAction[1][k]];
      }
    }

    if (nowAction[0] === 'clear') {
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
