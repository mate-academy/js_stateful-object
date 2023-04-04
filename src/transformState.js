'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let actionNumber = 0;
    actionNumber < Object.keys(actions).length;
    actionNumber++) {
    const robotAction = actions[actionNumber];

    switch (robotAction.type) {
      case 'addProperties':

        for (const key of Object.keys(robotAction.extraData)) {
          state[key] = robotAction.extraData[key];
        }
        break;

      case 'removeProperties':

        for (let j = 0; j < robotAction.keysToRemove.length; j++) {
          delete state[robotAction.keysToRemove[j]];
        }
        break;

      case 'clear':
        const propertiesToRemove = Object.keys(state);

        for (let j = 0; j < propertiesToRemove.length; j++) {
          delete state[propertiesToRemove[j]];
        }
        break;
      default:
        return {};
    }
  }

  return state;
}

module.exports = transformState;
