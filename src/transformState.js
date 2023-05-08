'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const addProps = (inputState, dataObj) => {
    for (const [key, value] of Object.entries(dataObj)) {
      inputState[key] = value;
    }
  };

  const removeProps = (inputState, dataArray) => {
    for (const key of dataArray) {
      delete inputState[key];
    }
  };

  const clear = (inputState) => {
    for (const key in inputState) {
      delete inputState[key];
    }
  };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProps(state, action.extraData);
        break;

      case 'removeProperties':
        removeProps(state, action.keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;
    }
  }
}

module.exports = transformState;
