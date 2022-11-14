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

      for (const value in keysToRemove) {
        delete state[keysToRemove[value]];
      }
    } else if (actions[key].type === 'clear') {
      for (const key1 in state) {
        delete state[key1];
      }
    }
  }
}

module.exports = transformState;
