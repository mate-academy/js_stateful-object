'use strict';

/**
   * @param {Object} state
   * @param {Object[]} actions
   */
function transformState(state, actions) {
  // write code here

  for (let i = 0; i < actions.length; i++) {
    const oneElement = actions[i];

    switch (oneElement.type) {
      case ('addProperties'):
        Object.assign(state, oneElement.extraData);
        break;
      case ('removeProperties'):
        const keysRemoving = oneElement.keysToRemove;

        for (let m = 0; m < keysRemoving.length; m++) {
          delete state[`${keysRemoving[m]}`];
        };
        break;
      case ('clear'):
        for (const keyA in state) {
          delete state[keyA];
        };
        break;
    }
  }

  return state;
}

module.exports = transformState;
