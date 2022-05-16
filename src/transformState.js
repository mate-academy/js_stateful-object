'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    for (const key in actions[i]) {
      /*  CLEAR  */

      if (actions[i][key] === 'clear') {
        for (const keyState in state) {
          delete state[keyState];
        }
      }

      /*   REMOVE  */

      if (actions[i][key] === 'removeProperties') {
        const values = [];

        for (const keyAct in actions[i]) {
          values.push(actions[i][keyAct]);
        }

        for (let j = 0; j < values[1].length; j++) {
          for (const keyState in state) {
            if (keyState === values[1][j]) {
              delete state[keyState];
            }
          }
        }
      }

      /*  ADD  */

      if (actions[i][key] === 'addProperties') {
        const values = [];

        for (const keyAct in actions[i]) {
          values.push(actions[i][keyAct]);
        }

        for (const addKey in values[1]) {
          state[addKey] = values[1][addKey];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
