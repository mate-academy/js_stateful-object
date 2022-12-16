'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const actionValues = Object.values(actions[i]);
    const actionKeys = Object.keys(actions[i]);

    for (let n = 0; n < actionKeys.length; n++) {
      if (actionKeys[n] === 'type') {
        if (actionValues[n] === 'addProperties') {
          Object.assign(state, actionValues[n + 1]);
        }

        if (actionValues[n] === 'removeProperties') {
          for (const key of actionValues[n + 1]) {
            if (state.hasOwnProperty(key)) {
              delete state[key];
            }
          }
        }

        if (actionValues[n] === 'clear') {
          for (const variableKey in state) {
            if (state.hasOwnProperty(variableKey)) {
              delete state[variableKey];
            }
          }
        }
      }
    }
  }
}

module.exports = transformState;
