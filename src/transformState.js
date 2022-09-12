'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      toClear();
    }

    if (action.type === 'removeProperties') {
      toRemove(action.keysToRemove);
    }

    if (action.type === 'addProperties') {
      toAdd(action.extraData);
    }
  }

  function toClear() {
    for (const key in state) {
      delete state[key];
    }
  }

  function toRemove(x) {
    for (const key in state) {
      if (x.includes(key)) {
        delete state[key];
      }
    }
  }

  function toAdd(x) {
    Object.assign(state, x);
  }
}

module.exports = transformState;
