'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(handleAction);

  function handleAction({ type, extraData, keysToRemove }) {
    switch (type) {
      case 'addProperties':
        addProperties(state, extraData);
        break;

      case 'removeProperties':
        removeProperties(state, keysToRemove);
        break;

      case 'clear':
        clearAll(state);
        break;

      default:
        throw new Error('Wrong action type!');
    }
  }

  function addProperties(object, extraProperties) {
    Object.assign(object, extraProperties);
  }

  function removeProperties(object, keysToDelete) {
    keysToDelete.forEach(key => {
      delete object[key];
    });
  }

  function clearAll(obj) {
    for (const key in obj) {
      delete obj[key];
    }
  }
}

module.exports = transformState;
