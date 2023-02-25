'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i of actions) {
    for (const key in i) {
      const add = i.extraData;
      const remove = i.keysToRemove;

      if (i[key] === 'addProperties') {
        for (const x in add) {
          state[x] = add[x];
        }
      }

      if (i[key] === 'removeProperties') {
        for (const ch of remove) {
          if (ch in state) {
            delete state[ch];
          }
        }
      }

      if (i[key] === 'clear') {
        for (const del in state) {
          delete state[del];
        }
      }
    }
  }
}

module.exports = transformState;
