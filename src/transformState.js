'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const finiteStateMachine = ({ type, extraData, keysToRemove }) => {
    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        keysToRemove.forEach(keyToRemove => {
          delete state[keyToRemove];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  };

  actions.forEach(action => {
    finiteStateMachine(action);
  });

  return state;
}

module.exports = transformState;
