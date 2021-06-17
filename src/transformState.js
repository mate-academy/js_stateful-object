'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  actions.forEach(val => {
    if (val.type === 'clear') {
      for (const key in state) {
        delete state[key];
      };
    };

    if (val.type === 'addProperties') {
      Object.assign(state, val.extraData);
    };

    if (val.type === 'removeProperties') {
      for (const key in state) {
        val.keysToRemove.forEach(item => {
          if (item === key) {
            delete state[key];
          };
        });
      };
    };
  });

  return state;
}

module.exports = transformState;
