'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {                       //sort out an array with actions 
    switch (action.type) {                              // pass to switch key with action
      case 'addProperties':
        Object.assign(state, action.extraData);         //rewrite the state array with additional properties 
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {       //delete from the state array some properties
          delete state[key];
        }
        break;

      case 'clear':                                   //delete all properties from the state object
        for (const key in state) {
          delete state[key];
        }
        break;

      default: break;
    }
  }
}

module.exports = transformState;
