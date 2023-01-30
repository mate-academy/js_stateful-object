'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties': {
        addProps(state, extraData);
        break;
      }

      case 'removeProperties': {
        removeProps(state, keysToRemove);
        break;
      }

      case 'clear': {
        clearAll(state);
        break;
      }

      default: {
        return state;
      }
    }
  }

  return state;
}

const addProps = function(myState, addThis) {
  Object.assign(myState, addThis);

  return myState;
};

const removeProps = function(myState, removeThis) {
  for (const item of removeThis) {
    delete myState[item];
  }

  return myState;
};

const clearAll = function(myState) {
  for (const key in myState) {
    delete myState[key];
  }

  return myState;
};

module.exports = transformState;
