'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, action) {
  const objectOfProperties = state;

  for (let i = 0; i < action.length; i++) {
    switch (action[i].type) {
      case 'addProperties' :
        for (const key in action[i].extraData) {
          objectOfProperties[key] = Object.assign(action[i].extraData[key]);
        }
        break;

      case 'removeProperties' :
        for (let j = 0; j < action[i].keysToRemove.length; j++) {
          delete objectOfProperties[action[i].keysToRemove[j]];
        }
        break;

      case 'clear' :
        for (const key in objectOfProperties) {
          delete objectOfProperties[key];
        }
        break;
    }
  }

  return objectOfProperties;
}

module.exports = transformState;
