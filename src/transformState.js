'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    const check = Object.values(action);

    switch (check[0]) {
      case 'clear' :
        Object.keys(state).forEach(key => delete state[key]);
        break;
      case 'addProperties' :
        Object.assign(state, check[1]);
        break;
      case 'removeProperties' :
        for (const property of check[1]) {
          delete state[property];
        }
        break;
      default:
        break;
    }
  }
}
module.exports = transformState;
