'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  const TRANSFORMED_STATE = state;

  for (const action of actions) {
    switch (true) {
      case action.type === 'clear':
        Object.keys(TRANSFORMED_STATE)
          .forEach(key => delete TRANSFORMED_STATE[key]);
        break;

      case action.type === 'addProperties':
        for (const data in action.extraData) {
          TRANSFORMED_STATE[data] = action.extraData[data];
        }
        break;

      case action.type === 'removeProperties':
        for (const key in action.keysToRemove) {
          delete TRANSFORMED_STATE[action.keysToRemove[key]];
        }
    }
  }

  return TRANSFORMED_STATE;
}

module.exports = transformState;
