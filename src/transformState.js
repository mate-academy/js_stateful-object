'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const robotActions = Object.assign({}, actions);
  const a = Object.keys(robotActions);

  for (let actionNumber = 0; actionNumber < a.length; actionNumber++) {
    const robotAction = robotActions[actionNumber];

    switch (robotAction.type) {
      case 'addProperties':

        const keys = Object.keys(robotAction.extraData);

        for (let j = 0; j < keys.length; j++) {
          state[keys[j]] = robotAction.extraData[keys[j]];
        }
        break;

      case 'removeProperties':

        for (let j = 0; j < robotAction.keysToRemove.length; j++) {
          delete state[robotAction.keysToRemove[j]];
        }
        break;

      case 'clear':
        const keysToRemove2 = Object.keys(state);

        for (let j = 0; j < keysToRemove2.length; j++) {
          delete state[keysToRemove2[j]];
        }
        break;
      default:
        return {};
    }
  }// for

  return state;
}

module.exports = transformState;
