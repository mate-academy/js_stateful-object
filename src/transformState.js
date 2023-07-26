'use strict';

function transformState(state, actions) {
  actions.forEach((action) => {
    const { type, extraData, keysToRemove } = action;

    if (type === 'addProperties') {
      Object.assign(state, extraData);
    }

    if (type === 'removeProperties') {
      keysToRemove.forEach((key) => {
        delete state[key];
      });
    }

    if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });

  return state;
}

module.exports = transformState;
