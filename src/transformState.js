'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action['type']) {
      case 'addProperties':
        Object.assign(state, action['extraData']);
        break;

      case 'removeProperties':
        for (const delClause of action['keysToRemove']) {
          delete state[delClause];
        }
        break;

      case 'clear':
        for (const delAllTheClauses in state) {
          delete state[delAllTheClauses];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
