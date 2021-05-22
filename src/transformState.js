'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    switch (true) {
      case i['type'] === 'addProperties' :

        /* It works, but linter isn't allow and some tests falls. Why? */

        // state = {
        //   ...state, ...i['extraData'],
        // };

        for (const key in i['extraData']) {
          state[key] = i['extraData'][key];
        }
        break;

      case i['type'] === 'removeProperties' :
        for (const property of i['keysToRemove']) {
          delete state[property];
        }
        break;

      default :
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
