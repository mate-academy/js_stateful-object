'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const i of actions) {
    const check = Object.values(i);

    if (check[0] === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    } else if (check[0] === 'addProperties') {
      Object.assign(state, check[1]);
    } else if (check[0] === 'removeProperties') {
      for (const property of check[1]) {
        delete state[property];
      }
    }
  }

  return (state);
}

module.exports = transformState;
