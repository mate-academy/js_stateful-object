'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  actions.forEach(val => {
    switch (val.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;
      case 'addProperties':
        Object.assign(state, val.extraData);
        break;
      case 'removeProperties':
        for (const key in state) {
          val.keysToRemove.forEach(item => {
            if (item === key) {
              delete state[key];
            };
          });
        };
        break;
    };
  });

  return state;
}

module.exports = transformState;
