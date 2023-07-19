'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  actions.forEach((action) => {
    const { type } = action;

    switch (type) {
      case 'clear':
        for (const stateProper in state) {
          if (state.hasOwnProperty(stateProper)) {
            delete state[stateProper];
          }
        }

        break;
      case 'addProperties':
        Object.assign(state, action.extraData);

        break;
      default:
        Object.values(action.keysToRemove).forEach((removeProperties) => {
          if (removeProperties in state) {
            delete state[removeProperties];
          }
        });
        break;
    }
  });
}

module.exports = transformState;
