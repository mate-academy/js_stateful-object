'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const myState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties' :

        for (const key in action.extraData) {
          myState[key] = action.extraData[key];
        }
        break;

      case 'clear':
        for (const keyState in myState) {
          delete myState[keyState];
        }
        break;

      case 'removeProperties':
        const keysArr = action.keysToRemove;

        for (const keyRemove of keysArr) {
          delete myState[keyRemove];
        }
        break;
    }
  }

  return myState;
}

module.exports = transformState;
