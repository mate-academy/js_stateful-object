'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const length = actions.length;

  //
  for (let i = 0; i < length; i++) {
    switch (actions[i].type) {
      case 'addProperties' :
        for (const items in actions[i].extraData) {
          state[items] = actions[i].extraData[items];
        }
        break;
      case 'removeProperties' :
        const length1 = actions[i].keysToRemove.length;

        for (let items = 0; items < length1; items++) {
          if (state.hasOwnProperty(actions[i].keysToRemove[items])) {
            delete state[actions[i].keysToRemove[items]];
          }
        }
        break;
      case 'clear' :
        for (const items in state) {
          delete state[items];
        }
        break;
    }
  }
}

module.exports = transformState;
