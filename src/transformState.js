'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const type of actions) {
    switch (type.type) {
      case 'addProperties':
        Object.assign(state, type.extraData);
        break;

      case 'removeProperties':
        for (const remove of type.keysToRemove) {
          delete state[remove];
        };
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
    };
  };

  return state;
};

module.exports = transformState;
