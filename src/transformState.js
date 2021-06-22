'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, action) {
  const objectOfProperties = state;

  for (const key of action) {
    switch (key.type) {
      case 'addProperties' :
        Object.assign(objectOfProperties, key.extraData);
        break;

      case 'removeProperties' :
        for (let j = 0; j < key.keysToRemove.length; j++) {
          delete objectOfProperties[key.keysToRemove[j]];
        }
        break;

      case 'clear' :
        for (const clear in objectOfProperties) {
          delete objectOfProperties[clear];
        }
        break;
    }
  }

  return objectOfProperties;
}

module.exports = transformState;
