'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'clear') {
      toClear();
    }

    if (actions[i].type === 'removeProperties') {
      toRemove(actions[i].keysToRemove, i);
    }

    if (actions[i].type === 'addProperties') {
      toAdd(i);
    }
  }

  function toClear() {
    for (const key in state) {
      delete state[key];
    }
  }

  function toRemove(x, i) {
    for (const key in state) {
      if (x.includes(key)) {
        delete state[key];
      }
    }
  }

  function toAdd(i) {
    Object.assign(state, actions[i].extraData);
  }
}

module.exports = transformState;
