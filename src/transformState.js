'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case `addProperties`:
        Object.assign(state, key.extraData);
        break;

      case `clear`:
        for (const key2 in state) {
          delete state[key2];
        }
        break;
      case `removeProperties`:
        key.keysToRemove.forEach((elo) => {
          if (state[elo]) {
            delete state[elo];
          }
        });
        break;
    }
  }
}

module.exports = transformState;
