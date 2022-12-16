'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    const actionValues = Object.values(item);
    const actionKeys = Object.keys(item);

    for (let i = 0; i < actionKeys.length; i++) {
      switch (actionKeys[i]) {
        case 'type':
          switch (actionValues[i]) {
            case 'addProperties':
              Object.assign(state, actionValues[i + 1]);
              break;

            case 'removeProperties':
              for (const key of actionValues[i + 1]) {
                if (state.hasOwnProperty(key)) {
                  delete state[key];
                }
              }
              break;

            case 'clear':
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
