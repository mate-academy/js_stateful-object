'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const obj = state;
  const actionsList = [ ...actions ];

  actionsList.forEach(element => {
    switch (element['type']) {
      case 'clear':
        for (const key in obj) {
          delete obj[key];
        }
        break;
      case 'removeProperties':
        element['keysToRemove'].forEach(prop => {
          delete obj[prop];
        });
        break;
      default:
        Object.assign(obj, element['extraData']);
    }

    return obj;
  });
}

module.exports = transformState;
