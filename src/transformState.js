'use strict';

function transformState(state, actions) {
  const modifiedState = state;

  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(modifiedState, action.extraData);
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete modifiedState[key];
        }

        break;
      case 'clear':
        for (const key in modifiedState) {
          delete modifiedState[key];
        }

        break;
      default:
        throw new Error(`No action type - '${action.type}'`);
    }
  });
}

module.exports = transformState;
