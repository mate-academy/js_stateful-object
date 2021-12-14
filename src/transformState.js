'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const resultState = state;

  for (const i of actions) {
    if (i.type === 'addProperties') {
      Object.assign(resultState, i.extraData);
    }

    if (i.type === 'removeProperties') {
      for (let n = 0; n < i.keysToRemove.length; n++) {
        delete resultState[i.keysToRemove[n]];
      }
    }

    if (i.type === 'clear') {
      Object.keys(resultState).forEach(key => delete resultState[key]);
    }
  }

  return resultState;
}

module.exports = transformState;
