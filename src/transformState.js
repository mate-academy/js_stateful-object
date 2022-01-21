'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case ('addProperties') :
        Object.assign(state, extraData);
        break;

      case ('removeProperties') :
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      case ('clear') :
        Object.keys(state).map(key => delete state[key]);
        // for (const key in state) {
        //   delete state[key];
        // }
        break;

      default : ;
    }
  }

  return state;
}

module.exports = transformState;
