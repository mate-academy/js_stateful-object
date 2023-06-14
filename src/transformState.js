'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // debugger;

  const results = [];

  for (const action of actions) {
    applyAction(state, action);

    results.push(state);
  }
}

function applyAction(state, action) {
  switch (action.type) {
    case 'addProperties':
      Object.assign(state, action.extraData);
      break;

    case 'removeProperties':
      for (const key of action.keysToRemove) {
        delete state[key];
      }
      break;

    case 'clear':
      for (const key in state) {
        delete state[key];
      }
      break;

    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

module.exports = transformState;
