'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  actions.forEach((action) => {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'clear':
        for (const stateProper in state) {
          if (state.hasOwnProperty(stateProper)) {
            delete state[stateProper];
          }
        }

        break;
      case 'addProperties':
        Object.assign(state, extraData);

        break;
      default:
        Object.values(keysToRemove).forEach((removeProperties) => {
          if (removeProperties in state) {
            delete state[removeProperties];
          }
        });
        break;
    }
  });
}

module.exports = transformState;
