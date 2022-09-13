'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  // let nowAction;

  for (const action of actions) {
    // nowAction = Object.values(actions[i]);

    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const property in state) {
          if (action.keysToRemove.includes(property)) {
            delete state[property];
          }
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
