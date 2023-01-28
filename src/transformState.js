'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const add = 'addProperties';
  const remove = 'removeProperties';
  const clearing = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case add:
        Object.assign(state, action.extraData);
        break;

      case remove:
        for (const ck of action.keysToRemove) {
          if (ck in state) {
            delete state[ck];
          };
        };
        break;

      case clearing:
        for (const del in state) {
          delete state[del];
        };
        break;
    };
  };

  return state;
};
module.exports = transformState;
