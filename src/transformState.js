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

        for (const val in keysToRemove) {
          delete state[keysToRemove[val]];
        }
        break;
      case 'clear':
        for (const key2 in state) {
          delete state[key2];
        }
        break;
    }
  }
}

module.exports = transformState;
