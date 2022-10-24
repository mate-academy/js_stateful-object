'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    if (actions[key].type === 'addProperties') {
      const extraData = Object.assign({}, actions[key].extraData);

      Object.assign(state, extraData);
    } else if (actions[key].type === 'removeProperties') {
      const keysToRemove = actions[key].keysToRemove;

      for (const val in keysToRemove) {
        delete state[keysToRemove[val]];
      }
    } else if (actions[key].type === 'clear') {
      for (const key2 in state) {
        delete state[key2];
      }
    }
  }
}

module.exports = transformState;
