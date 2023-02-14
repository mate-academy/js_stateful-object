'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      const extraDataValues = Object.entries(action.extraData);

      for (const value of extraDataValues) {
        state[value[0]] = value[1];
      }
    }

    if (action.type === 'removeProperties') {
      const keysToRemoveValues = action.keysToRemove;

      keysToRemoveValues.every(value => delete state[value]);
    }

    if (action.type === 'clear') {
      Object.keys(state).forEach(value => delete state[value]);
    }
  }

  return state;
}

module.exports = transformState;
