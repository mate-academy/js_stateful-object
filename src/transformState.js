'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear': {
        toClear();
        break;
      }

      case 'removeProperties': {
        toRemove(action.keysToRemove);
        break;
      }

      case 'addProperties': {
        toAdd(action.extraData);
        break;
      }

      default: {
        window.alert('no similar data find');
      }
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
