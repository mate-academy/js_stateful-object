'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const removeKeyFromStateObj = (key) => {
    delete state[key];
  };

  for (const action of actions) {
    if (Object.hasOwnProperty.call(action, 'type')) {
      switch (action.type) {
        case 'addProperties':
          Object.keys(action.extraData).forEach(
            (key) => {
              state[key] = action.extraData[key];
            });
          continue;

        case 'removeProperties':
          action.keysToRemove.forEach(removeKeyFromStateObj);
          continue;

        case 'clear':
          Object.keys(state).forEach(removeKeyFromStateObj);
          continue;

        default:
          throw new Error(
            'unknown "type" of "action" from "@param {Object[]} actions"');
      }
    }

    throw new Error(
      '"type" is not key of "action" from "@param {Object[]} actions"');
  }
}

module.exports = transformState;
