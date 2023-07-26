'use strict';

function transformState(state, actions) {
  actions.forEach((action) => {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;

      case 'removeProperties':
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      default:
        break;
    }
  });

  return state;
}

module.exports = transformState;
