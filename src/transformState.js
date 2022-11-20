'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((action) => {
    switch (action.type) {
      case 'addProperties':
        for (const [key, value] of Object.entries(action.extraData)) {
          state[key] = value;
        }; break;
      case 'removeProperties':
        removeProperties(state, 'removeProperties', action.keysToRemove); break;
      case 'clear': removeProperties(state, 'clear'); break;
    }
  });
}

const removeProperties = (fromObj, option, keysArray = []) => {
  if (Object.keys(fromObj).length > 0) {
    for (const objectKey of Object.keys(fromObj)) {
      if (keysArray.length !== 0 && option === 'removeProperties') {
        keysArray.forEach(keyToRemove => {
          if (objectKey === keyToRemove) {
            delete fromObj[objectKey];
          }
        });
      } else if (option === 'clear') {
        delete fromObj[objectKey];
      }
    }
  }
};

module.exports = transformState;
