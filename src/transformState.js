'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

 function transformState(state, actions) {
  return actions.reduce((newState, action) => {
    switch (action.type) {
      case 'addProperties':
        return Object.assign(newState, action.extraData);
        
      case 'removeProperties':
        action.keysToRemove.forEach((key) => {
          if (newState.hasOwnProperty(key)) {
            delete newState[key];
          }
        });
        break;
        
      case 'clear':
        Object.keys(newState).forEach((key) => {
          delete newState[key];
        });
        break;
        
      default:
        break;
    }
    
    return newState;
  }, state);
}

module.exports = transformState;
