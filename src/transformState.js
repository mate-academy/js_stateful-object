'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const newState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(newState, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete newState[key];
        }
        break;

      case 'clear':
        for (const key in newState) {
          delete newState[key];
        };
        break;

      default:
        return 'In nomine patris et filii et spiritus sancti. Amen';
    }
  }
}

module.exports = transformState;
