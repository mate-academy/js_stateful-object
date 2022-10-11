'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        const propertiesToAdd = action.extraData;

        Object.assign(state, propertiesToAdd);
        break;

      case 'removeProperties':
        const propertiesToRemove = action.keysToRemove;

        propertiesToRemove.forEach(property => {
          delete state[property];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  });

  return state;
}

module.exports = transformState;
