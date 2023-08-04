'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const extraDataValue = action.extraData || {};
    const typeOfAction = action.type;
    const removeValue = action.keysToRemove || {};

    switch (typeOfAction) {
      case 'addProperties':
        for (const newProperty in extraDataValue) {
          state[newProperty] = extraDataValue[newProperty];
        }

        break;

      case 'removeProperties':
        removeValue.forEach(function(item) {
          delete state[item];
        });

        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);

        break;

      default:
        throw new Error('Error!');
    }
  }

  return state;
}

module.exports = transformState;
