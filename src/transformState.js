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
        for (const key of actions[i].keysToRemove) {
          delete state[key];
        }

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;

      default:
        break;
    }

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
