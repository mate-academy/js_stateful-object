'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const robotActions = Object.assign({}, actions);
  const robotState = state;
  const a = Object.keys(robotActions);

  for (let actionNumber = 0; actionNumber < a.length; actionNumber++) {
    const robotAction = robotActions[actionNumber];

    switch (robotAction.type) {
      case 'addProperties':

        const keys = Object.keys(robotAction.extraData);

        for (let j = 0; j < keys.length; j++) {
          robotState[keys[j]] = robotAction.extraData[keys[j]];
        }
        break;

      case 'removeProperties':

        for (let j = 0; j < robotAction.keysToRemove.length; j++) {
          delete robotState[robotAction.keysToRemove[j]];
        }
        break;

      case 'clear':
        const keysToRemove2 = Object.keys(robotState);

        for (let j = 0; j < keysToRemove2.length; j++) {
          delete robotState[keysToRemove2[j]];
        }
        break;
      default:
        return {};
    }
  }// for

  return robotState;
}

module.exports = transformState;
