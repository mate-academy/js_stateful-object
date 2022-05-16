'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      if (action[key] === 'clear') {
        for (const keyState in state) {
          delete state[keyState];
        }
      }

      if (action[key] === 'removeProperties') {
        const values = [];

        for (const keyAct in action) {
          values.push(action[keyAct]);
        }

        for (let j = 0; j < values[1].length; j++) {
          for (const keyState in state) {
            if (keyState === values[1][j]) {
              delete state[keyState];
            }
          }
        }
      }

      if (action[key] === 'addProperties') {
        const values = [];

        for (const keyAct in action) {
          values.push(action[keyAct]);
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
