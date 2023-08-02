'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const changeState = ({ type, extraData, keysToRemove }) => {
    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);

        return;

      case 'removeProperties':
        keysToRemove.forEach(keyToRemove => {
          delete state[keyToRemove];
        });

        return;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        return;

      default:
        return 'error';
    }
  };

  actions.forEach(action => {
    changeState(action);
  });
}

module.exports = transformState;
