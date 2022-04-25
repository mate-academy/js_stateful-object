'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const i in actions) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties':
        for (const key of actions[i].keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }

    // if (actions[i].type === 'addProperties') {
    //   Object.assign(state, actions[i].extraData);
    // }

    // if (actions[i].type === 'removeProperties') {
    //   for (const key of actions[i].keysToRemove) {
    //     delete state[key];
    //   }
    // }

    // if (actions[i].type === 'clear') {
    //   for (const key in state) {
    //     delete state[key];
    //   }
    // }
  }
}

module.exports = transformState;
