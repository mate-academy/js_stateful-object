'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let myState = state;

  for (const item of actions) {
    if (item.type === 'addProperties') {
      myState = Object.assign(myState, item.extraData);
    }

    if (item.type === 'removeProperties') {
      for (const key of item.keysToRemove) {
        delete myState[key];
      }
    }

    if (item.type === 'clear') {
      for (const key in myState) {
        if (myState.hasOwnProperty(key)) {
          delete myState[key];
        }
      }
    }
  }

  return myState;
}

module.exports = transformState;
