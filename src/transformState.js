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

    switch (nowAction[0]) {
      case 'addProperties':
        for (const key2 in nowAction[1]) {
          state[key2] = nowAction[1][key2];
        }
        break;

      case 'removeProperties':
        for (let k = 0; k < nowAction[1].length; k++) {
          delete state[nowAction[1][k]];
        }
        break;

      case 'clear':
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
