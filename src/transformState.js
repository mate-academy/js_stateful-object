'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        const { extraData } = action;

        Object.assign(state, extraData);

        break;
      }

      case 'removeProperties': {
        const { keysToRemove } = action;

        removeProp(state, keysToRemove);

        break;
      }

      case 'clear': {
        clear(state);

        break;
      }

      default: {
        throw new Error(`Unknowm action type: ${action.type}`);
      }
    }
  }
}

function removeProp(state, keysToRemove) {
  for (const key of keysToRemove) {
    if (state.hasOwnProperty(key)) {
      delete state[key];
    }
  }
}

function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
