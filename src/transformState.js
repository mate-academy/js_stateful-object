'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const add = 'addProperties';
  const remove = 'removeProperties';
  const clearing = 'clear';

  for (const ch of actions) {
    if (ch.type === add) {
      Object.assign(state, ch.extraData);
    };

    if (ch.type === remove) {
      for (const ck of ch.keysToRemove) {
        if (ck in state) {
          delete state[ck];
        };
      };
    };

    if (ch.type === clearing) {
      for (const del in state) {
        delete state[del];
      };
    };
  };

  return state;
};

module.exports = transformState;
