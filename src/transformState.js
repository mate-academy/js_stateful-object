'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const tempState = state;

  actions.map(action => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(tempState, { ...action.extraData });
        break;
      case 'removeProperties':
        action.keysToRemove.map(key => delete tempState[key]);
        break;
      case 'clear':
        Object.keys(tempState).forEach(key => delete tempState[key]);
        break;
      default:
        throw new Error('Invalid action type');
    }
  });

  return tempState;
}

module.exports = transformState;
