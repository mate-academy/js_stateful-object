'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const clear = 'clear';
  const add = 'addProperties';
  const remove = 'removeProperties';

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === clear) {
      for (const ch in state) {
        delete state[ch];
      }
    }

    if (actions[i].type === add) {
      for (const jey in actions[i].extraData) {
        state[jey] = actions[i].extraData[jey];
      }
    }

    if (actions[i].type === remove) {
      for (let j = 0; j < actions[i].keysToRemove.length; j++) {
        for (const ch in state) {
          if (ch === actions[i].keysToRemove[j]) {
            delete state[ch];
          }
        }
      }
    }
  }
}

module.exports = transformState;
