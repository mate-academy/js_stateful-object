'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
 function transformState(state, actions) {
  for (let j = 0; j < actions.length; j++) {
    if (actions[j].type === 'addProperties') {
      Object.assign(state, actions[j].extraData);
    } else if (actions[j].type === 'removeProperties') {
      for (const i of Object.values(actions[j].keysToRemove)) {
        delete state[i];
      }
    } else if (actions[j].type === 'clear') {
      for (const i of Object.keys(state)) {
        delete state[i];
      }
    }
  }

  return (state);
}

module.exports = transformState;
