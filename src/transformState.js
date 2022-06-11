'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const stateCopy = state;

  actions.forEach((action) => {
    // if (action.type === 'addProperties') {
    //   Object.assign(stateCopy, action.extraData);
    // }

    // if (action.type === 'removeProperties') {
    //   for (const key of action.keysToRemove) {
    //     delete stateCopy[key];
    //   };
    // }

    // if (action.type === 'clear') {
    //   for (const key in stateCopy) {
    //     delete stateCopy[key];
    //   }
    // }

    switch (action.type) {
      case 'addProperties':
        Object.assign(stateCopy, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete stateCopy[key];
        };
        break;

      case 'clear':
        for (const key in stateCopy) {
          delete stateCopy[key];
        }
        break;
    }
  });

  return stateCopy;
}

module.exports = transformState;
