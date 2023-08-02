'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ('addProperties') :
        Object.assign(state, action.extraData);

        break;

      case `removeProperties`:
        for (const i of action.keysToRemove) {
          delete state[i];
        }

        break;

      case `clear`:
        for (const i in state) {
          delete state[i];
        }

        break;

      default:
        throw new Error();
    }
  };
}

module.exports = transformState;
