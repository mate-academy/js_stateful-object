'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      // state = {
      //   ...state, ...actions[i].extraData,
      // };

      Object.assign(state, actions[i].extraData);
    }

    if (actions[i].type === 'removeProperties') {
      for (let j = 0; j < actions[i].keysToRemove.length; j++) {
        for (const key in state) {
          if (key === actions[i].keysToRemove[j]) {
            delete state[(actions[i].keysToRemove[j])];
          }
        }
      }
    }

    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  // return (state1);
}

module.exports = transformState;
