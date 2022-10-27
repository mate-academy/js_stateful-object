'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    switch (actions[action].type) {
      case 'addProperties':
        const extraData = Object.assign({}, actions[action].extraData);

        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        const keysToRemove = actions[action].keysToRemove;

        for (const key in keysToRemove) {
          delete state[keysToRemove[key]];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
