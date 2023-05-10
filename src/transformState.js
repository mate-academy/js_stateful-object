'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const kindOfAction of actions) {
    switch (kindOfAction.type) {
      case 'addProperties':
        Object.assign(state, kindOfAction.extraData);
        break;
      case 'removeProperties':
        kindOfAction.keysToRemove.forEach(el => {
          delete state[el];
        });
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
