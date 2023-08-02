'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const extraDatavalue = actions[i].extraData;
    const typeOfAction = actions[i].type;
    const removeValue = actions[i].keysToRemove;

    switch (typeOfAction) {
      case 'addProperties':
        for (const newProperty in extraDatavalue) {
          state[newProperty] = extraDatavalue[newProperty];
        }
        break;

      case 'removeProperties':
        for (let j = 0; j < removeValue.length; j++) {
          delete state[removeValue[j]];
        }

        break;

      default:
        Object.keys(state).forEach(key => delete state[key]);
    }
  }

  return state;
}

module.exports = transformState;
