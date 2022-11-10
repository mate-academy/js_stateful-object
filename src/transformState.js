'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const oneElement = actions[i];

    if (oneElement.type === 'addProperties') {
      Object.assign(state, oneElement.extraData);
    } else if (oneElement.type === 'removeProperties') {
      const keysRemoving = oneElement.keysToRemove;

      for (let m = 0; m < keysRemoving.length; m++) {
        delete state[`${keysRemoving[m]}`];
      }
    } else if (oneElement.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
