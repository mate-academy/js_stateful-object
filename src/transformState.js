'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const extraDatavalue = action.extraData;
    const typeOfAction = action.type;
    const removeValue = action.keysToRemove;

    switch (typeOfAction) {
      case 'addProperties':
        for (const newProperty in extraDatavalue) {
          state[newProperty] = extraDatavalue[newProperty];
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
        return 'Error!';
    }
  }

  return state;
}

module.exports = transformState;
