'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    switch (actions[key].type) {
      case 'addProperties':

        const extraData = Object.assign({}, actions[key].extraData);

        Object.assign(state, extraData);

        break;

      case 'removeProperties':

        const keysToRemove = actions[key].keysToRemove;

        for (const value in keysToRemove) {
          delete state[keysToRemove[value]];
        }

        break;

      case 'clear':

        for (const key1 in state) {
          delete state[key1];
        }

        break;
    }
  }
}

module.exports = transformState;
