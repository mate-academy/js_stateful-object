'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const addProperties = (data) => {
    for (const key in data) {
      state[key] = data[key];
    }
  };

  const removeProperties = (keys) => {
    for (const key of keys) {
      if (state.hasOwnProperty(key)) {
        delete state[key];
      }
    }
  };

  const clear = () => {
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        delete state[key];
      }
    }
  };

  for (const action of actions) {
    switch (action.type) {
      case action.type = 'addProperties':
        addProperties(action.extraData);
        break;
      case action.type = 'removeProperties':
        removeProperties(action.keysToRemove);
        break;
      case action.type = 'clear':
        clear();
        break;
    }
  }

  return state;
}

module.exports = transformState;
