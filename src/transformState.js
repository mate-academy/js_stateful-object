'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

const stateVal = {};

const actionVal = [
  {
    type: 'addProperties',
    extraData: {
      name: 'Jim', hello: 'world',
    },
  },
];

function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const key of Object.keys(action.extraData)) {
        state[key] = action.extraData[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        if (state[keyToRemove]) {
          delete state[keyToRemove];
        }
      }
    }

    if (action.type === 'clear') {
      for (const keyToRm of Object.keys(state)) {
        delete state[keyToRm];
      }
    }
  }
}

transformState(stateVal, actionVal);
module.exports = transformState;
