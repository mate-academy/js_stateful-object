'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;
      case 'removeProperties':
        for (const action of actions[i].keysToRemove) {
          delete state[action];
        };
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
      default:
        return state;
    }
    // if (actions[i].type === 'addProperties') {
    //   Object.assign(state, actions[i].extraData);
    // }

    // if (actions[i].type === 'removeProperties') {
    //   for (const action of actions[i].keysToRemove) {
    //     delete state[action];
    //   }
    // }

    // if (actions[i].type === 'clear') {
    //   Object.keys(state).forEach(key => delete state[key]);
    // }
  }
}

module.exports = transformState;
